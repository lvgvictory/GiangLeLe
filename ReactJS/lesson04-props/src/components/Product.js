import React, { Component } from 'react';

class Product extends Component {
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
                                <a className="btn btn-primary">Mua Hang</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default Product;
