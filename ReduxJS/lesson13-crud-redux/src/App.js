import React, { Component } from 'react';
// import _ from 'lodash'; //su dung tat ca thu vien cua lodash
// import { findIndex, filter } from 'lodash'; // du dung tung ham cua lodash
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

    onGenerateData = () => {
        var tasks = [
            {
                id : this.generateID(),
                name : 'Hoc Lap Trinh',
                status : true
            },
            {
                id : this.generateID(),
                name : 'Di Boi',
                status : false
            },
            {
                id : this.generateID(),
                name : 'LOL',
                status : true
            },
        ];

        this.setState({
            tasks : tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks)); // luu tru duoi dang JSON
    }

    onToggleForm = () => {
        var { itemEditing } = this.props;
        if (itemEditing && itemEditing.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        
        this.props.onClearTask({
            id : '',
            name : '',
            status : false
        });
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onShowForm = () => {
        this.setState({
            isDisplatForm : true
        });
    }

    render() {

        var { isDisplayForm } = this.props; // lay isDisplayForm tren store

        // loc theo keyword su dung ca thu vien lodash
        // tasks = _.filter(tasks, (task) => {
        //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        // });

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        {/*Task Form*/}
                        {/*{ eleTaskForm }*/}
                         <TaskForm onCloseForm={ this.onCloseForm } />
                        {/*End Task Form*/}
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={ this.onToggleForm }
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-default"
                            onClick={ this.onGenerateData }
                        >
                            Generate Data
                        </button>
                        {/*Control*/}
                        <Control />
                        {/*End Control*/}

                        {/*List*/}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList />
                            </div>
                        </div>
                        {/*End List*/}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => { //dispatch de thuc thi hanh dong
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm());
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onClearTask : (task) => {
            dispatch(actions.editTask(task));
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
