import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterName : '',
            filterStatus : -1, //all : -1, active: 1, deactive: 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value === 'checkbox' ? target.checked : target.value;
        var filter = {
            name : name === 'filterName' ? value : this.state.filterName, 
            status : name === 'filterStatus' ? value : this.state.filterStatus
        }

        this.props.onFilterTable(filter);
        this.setState({
            [name] : value
        });


    }

    render() {
        var { tasks, filterTable, keyword, sort } = this.props; // === var tasks = this.props.tasks lay tren store
        //filter on table
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTable.name) !== -1;// chuyen thanh chu thuong sau do kiem tra co chuoi filterTable.name trong task.name hay khong
                                                                               // neu khac -1 thi chua con neu == -1 thi khong chua.
                });
            }
            //if (filterTable.status){} neu co ton tai bien status !== null or !== undefined or !== 0
            tasks = tasks.filter((task) => {
                if (filterTable.status === -1) {
                    return task;
                } else {
                    return task.status === (filterTable.status === 1 ? true : false);
                }
            });
        }

        // Search
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;// chuyen thanh chu thuong sau do kiem tra co chuoi filter.name trong task.name hay khong
                                                                           // neu khac -1 thi chua con neu == -1 thi khong chua.
            });
        }

        //Sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) {
                    return sort.value; // tra ve 1 thi la tang dan nguoc lai la giam dan
                } else if (a.name < b.name) {
                    return -sort.value; // // tra ve -1 thi la tang dan nguoc lai la giam dan
                } else {
                    return 0;
                }
                
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) {
                    return -sort.value;
                } else if (a.status < b.status) {
                    return sort.value;
                } else {
                    return 0;
                }
                
            });
        }

        var { filterName, filterStatus } = this.state;
        var eleTasks = tasks.map((task, index) => {
            return (
                <TaskItem 
                    index={ index } 
                    key={ task.id } 
                    task={ task } 
                />
            );
        });

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterName" 
                                value={ filterName }
                                onChange={ this.onChange }
                            />
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={ filterStatus } onChange={ this.onChange }>
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {/*Task Item*/}
                    { eleTasks }
                    {/*End Task Item*/}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => { // lay du lieu tren store ve
    return {
        tasks : state.tasks, // lay tasks tren store ve
        filterTable : state.filterTable,
        keyword : state.search,
        sort : state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable : (filter) => {
            dispatch(actions.filterTask(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
