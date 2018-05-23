import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name] : value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
        var {txtUsername, txtPassword} = this.state;

        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username : txtUsername,
                password : txtPassword
            }));
        }
    }

    render() {
        var {txtUsername, txtPassword} = this.state;
        var loggedInUser = localStorage.getItem('user');
        var {location} = this.props;
        console.log(loggedInUser);
        

        if (loggedInUser !== null) { // neu da login thi Redirect
            return <Redirect to={{
                pathname : '/products',
                state : {
                    from : location
                }
            }} />
        }

        return (
            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3">
                    
                    <form onSubmit={ this.onLogin }>
                        <legend>Dang Nhap</legend>
                    
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtUsername" 
                                value={txtUsername}
                                onChange={ this.onChange }
                            />
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="txtPassword" 
                                value={txtPassword}
                                onChange={ this.onChange }
                            />
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Dang Nhap</button>
                    </form>
                    
                </div>
            </div>
            
        );
    }
}

export default Login;
