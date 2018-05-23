import React, { Component } from 'react';

class Product extends Component {

    // constructor(props) {
    //     super(props);
        // this.onAddToCart = this.onAddToCart.bind(this);
    // }

    // onAddToCart(text) {
    //     alert(this.props.children + ' - ' + this.props.price);
    //     console.log(this.props.children + ' - ' + this.props.price);
    // }

    onAddToCart = () => {
        alert(this.props.children + ' - ' + this.props.price);
    }

    render() {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img src={ this.props.image } alt={ this.props.children } />
                        <div className="caption">
                            <h3>{ this.props.children }</h3>
                            <p>
                                { this.props.price } VND
                            </p>
                            <p>
                            {/*<a className="btn btn-primary" onClick={ () => {this.onAddToCart(this.props.children)} }>Mua Hang</a>*/}
                            <a className="btn btn-primary" onClick={ this.onAddToCart }>Mua Hang</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
