import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id : '',
            name : '',
            status : false,
        };
    }

    componentWillMount() {
        if (this.props.itemEditing === '' && this.props.itemEditing.id !== null) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status,
            });
        } else {
            this.onClear()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status,
            });
        } else if (!nextProps.itemEditing) {
            // console.log('Sua -> Them');
            this.setState({
                id : '',
                name : '',
                status : false,
            });
        } else {
            this.onClear()
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChangeForm = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }

        this.setState({
            [name] : value
        });
    }

    onSave = (event) => {
        event.preventDefault()
        // this.props.onSubmit(this.state);
        this.props.onSaveTask(this.state);
        //Cancel & Close Form
        this.onClear();

        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name : '',
            status : false,
        });
    }

    render() {
        var { id } = this.state;

        if (!this.props.isDisplayForm) {
            return '';
        }

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span 
                            className="fa fa-times-circle text-right"
                            onClick={ this.onCloseForm }
                        >
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={ this.onSave }>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={ this.onChangeForm }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                            className="form-control" 
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={ this.onChangeForm }
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Save
                            </button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={ this.onClear }
                            >
                                <span className="fa fa-close mr-5"></span>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask : (task) => {
            dispatch(actions.saveTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
