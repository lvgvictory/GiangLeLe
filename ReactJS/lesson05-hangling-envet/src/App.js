import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
    onClick() {
        console.log('day la component app');
    }

    render() {
        var products = [
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
        ];

        let elements = products.map((product, index) => {
            let result = '';
            if (product.status) {
                result = <Product key={index}
                            price={ product.price }
                            image={ product.image }
                        >{ product.name }</Product>
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse my-css">
                    <div className="container-fluid">
                        <a className="navbar-brand">Event</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                
                            { elements }
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-default" onClick={ this.onClick }>
                                Click Me !
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
