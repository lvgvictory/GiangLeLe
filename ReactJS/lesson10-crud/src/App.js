import React, { Component } from 'react';
import _ from 'lodash'; //su dung tat ca thu vien cua lodash
// import { findIndex, filter } from 'lodash'; // du dung tung ham cua lodash
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks : [], // id : unique, name, status
            isDisplatForm : false,
            taskEditing : null,
            filter : {
                name : '',
                status : -1
            },
            keyword : '',
            sortBy : 'name', // mac dinh sap xep theo ten va tang dan
            sortValue : 1, // mac dinh sap xep theo trang thai kich hoat
        };

        
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));//chuyen sang dang obj JS

            this.setState({
                tasks : tasks
            });
        }
    }

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

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    onToggleForm = () => {
        if (this.state.isDisplatForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplatForm : true,
                taskEditing : null
            });
            console.log(this.state.taskEditing);
        } else {
            this.setState({
                isDisplatForm : !this.state.isDisplatForm,
                taskEditing : null
            });
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisplatForm : false
        });
    }

    onShowForm = () => {
        this.setState({
            isDisplatForm : true
        });
    }

    onSubmit = (data) => {
        var { tasks } = this.state;

        // Add Task
        if (data.id === '') {
            var task = {
                id : this.generateID(),
                name : data.name,
                status : data.status
            }
            tasks.push(task);
        } else {
            //Edit Task
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }

        

        this.setState({
            tasks : tasks,
            taskEditing : null
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
        // var index = this.findIndex(id);
        var { tasks } = this.state;

        // su dung ca thu vien lodash
        var index = _.findIndex(tasks, (task) => {
            return task.id === id; // tra ra ket qua dung hoac sai cua so sanh
        });

        if (index !== -1) {
            tasks[index].status = !tasks[index].status;

            this.setState({
                tasks : tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });

        return result;
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);

        if (index !== -1) {
            tasks.splice(index, 1); // xoa di mot phan tu bat dau tu phan tu index

            this.setState({
                tasks : tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index]
        if (index !== -1) {
            this.setState({
                taskEditing : taskEditing
            });
        }
        this.onShowForm();
        console.log(this.state.taskEditing);
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        
        this.setState({
            filter : {
                name : filterName.toLowerCase(),
                status : filterStatus,
            }
        })
    }

    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        });
    }

    render() {
        var { 
            tasks, 
            isDisplatForm, 
            taskEditing, 
            filter, 
            keyword, 
            sortBy,
            sortValue
        } = this.state; // === var tasks = this.state.tasks

            var eleTaskForm = isDisplatForm ? <TaskForm onSubmit={ this.onSubmit } onCloseForm={ this.onCloseForm } task={ taskEditing } /> : '';

        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;// chuyen thanh chu thuong sau do kiem tra co chuoi filter.name trong task.name hay khong
                                                                               // neu khac -1 thi chua con neu == -1 thi khong chua.
                });
            }
            //if (filter.status){} neu co ton tai bien status !== null or !== undefined or !== 0
            tasks = tasks.filter((task) => {
                if (filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true : false);
                }
            });
            
        }

        // if (keyword) {
        //     tasks = tasks.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;// chuyen thanh chu thuong sau do kiem tra co chuoi filter.name trong task.name hay khong
        //                                                                    // neu khac -1 thi chua con neu == -1 thi khong chua.
        //     });
        // }

        // loc theo keyword su dung ca thu vien lodash
        tasks = _.filter(tasks, (task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });

        if (sortBy === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) {
                    return sortValue; // tra ve 1 thi la tang dan nguoc lai la giam dan
                } else if (a.name < b.name) {
                    return -sortValue; // // tra ve -1 thi la tang dan nguoc lai la giam dan
                } else {
                    return 0;
                }
                
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) {
                    return -sortValue;
                } else if (a.status < b.status) {
                    return sortValue;
                } else {
                    return 0;
                }
                
            });
        }

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplatForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        {/*Task Form*/}
                        { eleTaskForm }
                        {/*End Task Form*/}
                    </div>
                    <div className={ isDisplatForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
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
                        <Control 
                            onSearch={ this.onSearch } 
                            onSort={ this.onSort }
                            sortBy={ sortBy }
                            sortValue={ sortValue }
                        />
                        {/*End Control*/}

                        {/*List*/}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={ tasks } 
                                    onUpdateStatus={ this.onUpdateStatus } 
                                    onDelete={ this.onDelete }
                                    onUpdate={ this.onUpdate }
                                    onFilter={ this.onFilter }
                                />
                            </div>
                        </div>
                        {/*End List*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
