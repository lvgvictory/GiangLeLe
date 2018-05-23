import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            txtUserName : '',
            txtPassword : '',
            txtDescription : '',
            sltGender : 0,
            rdLang : 'en',
            chkbStatus : true
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event) {
        // this.setState({
        //     username : event.target.value
        // });

        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name] : value
        });
    }

    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={ this.onHandleSubmit }>

                                    <div className="form-group">
                                        <label>UserName: </label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txtUserName" 
                                            onChange={ this.onHandleChange }
                                            value={ this.state.txtUserName }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            name="txtPassword" 
                                            onChange={ this.onHandleChange }
                                            value={ this.state.txtPassword }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Description: </label>
                                        <textarea 
                                            name="txtDescription" 
                                            className="form-control" 
                                            row="3"
                                            onChange={ this.onHandleChange }
                                            value={ this.state.txtDescription }
                                        >
                                        </textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Gender: </label>
                                        <select 
                                            name="sltGender" 
                                            className="form-control" 
                                            required="required"
                                            value={ this.state.sltGender }
                                            onChange={ this.onHandleChange }
                                        >
                                            <option value={0} >Nu</option>
                                            <option value={1} >Nam</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Ngon Ngu: </label>
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="en" 
                                                    onChange={ this.onHandleChange }
                                                    checked={ this.state.rdLang === "en"}
                                                />
                                                Tieng anh
                                            </label>
                                            <br />
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="vi" 
                                                    onChange={ this.onHandleChange }
                                                    checked={ this.state.rdLang === "vi"}
                                                />
                                                Tieng viet
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    value={true} 
                                                    name="chkbStatus"
                                                    onChange={ this.onHandleChange }
                                                    checked={ this.state.chkbStatus === true }
                                                />
                                                Status
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
