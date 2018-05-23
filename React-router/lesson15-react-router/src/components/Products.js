import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import Product from './product';

class Products extends Component {
    render() {
        var products = [
            {
                id : 1,
                slug : 'iphone-x',
                name : 'Iphone X',
                price : 30000000
            },
            {
                id : 2,
                slug : 'samsung-galaxy-s7',
                name : 'SamSung Galaxy S7',
                price : 13000000
            },
            {
                id : 3,
                slug : 'oppo-f1s',
                name : 'Oppo F1s',
                price : 10000000
            }
        ];

        var { match } = this.props;
        var url = match.url;        

        var result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        });

        var {location} = this.props;
        console.log(location);
        

        return (
            <div className="container">
                <h1>Day la danh sach san pham</h1>
                
                <div className="row">
                    
                    <ul className="list-group">
                        {result !== '' ? result : ''}
                    </ul>
                    
                </div>
                
                <div className="row">
                    <Route path={`${url}/:name`} component={Product} />
                </div>
                
            </div>
        );
    }
}

export default Products;
