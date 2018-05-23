import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return (
                <h3>
                    ID: { product.id } <br />
                    NAME: { product.name } <br />
                    PRICE: { product.price } <br />
                    STATUS: {product.status ? 'Active' : 'Pending'}
                </h3>
            );
        }
    }
    render() {
        var a = 8;
        var b = 9;
        var name = 'ahihi';
        var product = {
            id : 1,
            name : 'Iphone 7 Plus',
            price : '17.000.000',
            status : true
        };

        var users = [
            {
                id : 4,
                name : 'Nguyen Van A',
                age : 18
            },

            {
                id : 5,
                name : 'Tran Van A',
                age : 24
            },

            {
                id : 6,
                name : 'Ly thi C',
                age : 30
            }

        ];

        var elements = users.map((user, index) => {
            return (
                <div key={index}>
                    <small>{ index }</small>
                    <h2>Name : { user.name }</h2>
                    <p>Age : { user.age } </p>
                </div>
            );
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">Title</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="ml-30">
                    <h2>
                        a: { a } <br />
                        b: { b } <br />
                        result: { a + b }
                    </h2>
                    <h2>
                        { name }
                    </h2>
                    {/*<h2>*/}
                        {/*ID: { product.id } <br />
                        NAME: { product.name } <br />
                        PRICE: { product.price } <br />
                        STATUS: {product.status ? 'Active' : 'Pending'}*/}
                    {/*</h2>*/}
                    { this.showInfoProduct(product) }
                    <br />
                    <hr />
                    { elements }
                </div>
            </div>
            
        );
        

        // return React.createElement('span', {className : 'label label-danger'}, 'AppComponent');
    }
}

export default App;
