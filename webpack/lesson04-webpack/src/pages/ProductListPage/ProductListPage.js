import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {
    componentDidMount() { // duoc goi sau khi component render lan dau tien
        // console.log('componentDidMount');
        // callApi('products', 'GET', null).then(res => {
        //     this.props.fetchAllProducts(res.data);
        // });

        this.props.fetchAllProducts();
    }

    render() {
        // console.log('render');

        var  { products } = this.props;

        return (

            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-12">

                    <Link to="/product/add" className="btn btn-info mb-10">
                        Them San Pham
                    </Link>

                    {/* List Product */}
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>

                </div>
            </div>

        );
    }

    showProducts = (products) => {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }

        return result;
    }

    onDelete = (id) => {
        // var { products } = this.state;

        // callApi(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) { // OK
        //         var index = this.findIndex(products, id);

        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             });
        //         }
        //     }
        // });

        this.props.onDeleteProduct(id);
    }

    // findIndex = (products, id) => {
    //     var result = -1;

    //     products.forEach((product, index) => {
    //         if (product.id === id) {
    //             result = index;
    //         }
    //     });

    //     return result;
    // }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
