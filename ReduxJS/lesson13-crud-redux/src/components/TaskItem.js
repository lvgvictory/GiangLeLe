import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);// === dispatch(actions.deleteTask())
        this.props.onCloseForm();
    }

    onEditTask = () => {
        this.props.onOpenForm(); // === dispatch(actions.openForm())
        this.props.onEditTask(this.props.task);
    }

    render() {

        var { task, index } = this.props; // === var task = this.props.task

        return (
            <tr>
                <td>{ index + 1}</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <span 
                        className={ task.status ? 'label label-success' : 'label label-danger'} 
                        onClick={ this.onUpdateStatus }
                    >
                        { task.status ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={ this.onEditTask }
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={ this.onDelete }
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch, props) => { // chuyen dispatch mot actions thanh props cua component nay
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDelete : (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
