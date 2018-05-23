import React, { Component } from 'react';
import './App.css';
// import Product from './components/Product';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    id : 1,
                    name : 'Apple Iphone 6 Plus 16GB',
                    price : 9000000,
                    image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/14/636488604632055821_HASP-IPHONE-6S-PLUS-32GB-00271555%20(5).jpg',
                    status : true
                },
                {
                    id : 2,
                    name : 'Samsung Galaxy S7',
                    price : 19000000,
                    image : 'https://i.ebayimg.com/images/g/UMMAAOSw2CJavkj3/s-l300.jpg',
                    status : true
                },
                {
                    id : 3,
                    name : 'Oppo F1s',
                    price : 8000000,
                    image : 'https://i.ebayimg.com/images/g/UMMAAOSw2CJavkj3/s-l300.jpg',
                    status : true
                }
            ],
            isActive : true
        };
    }

    onSetState = () => {
        //C1

        // if (this.state.isActive) {
        //     this.setState({
        //         isActive : false
        //     });
        // } else {
        //     this.setState({
        //         isActive : true
        //     });
        // }

        // C2
        this.setState({
            isActive : !this.state.isActive
        });
    }

    render() {

        let elements = this.state.products.map((product, index) => {
            let result = '';
            if (product.status && this.state.isActive) {
                result = <tr key={ index }>
                            <td>{ index }</td>
                            <td>{ product.name }</td>
                            <td>
                                <span className="label label-success">{ product.price } VND</span>
                            </td>
                        </tr>
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse my-css">
                    <div className="container-fluid">
                        <a className="navbar-brand">State</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                { elements }
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-default" onClick={ this.onSetState }> 
                        Active : { this.state.isActive === true ? 'true' : 'flase' }
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
