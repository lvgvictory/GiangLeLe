import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src="https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/14/636488604632055821_HASP-IPHONE-6S-PLUS-32GB-00271555%20(5).jpg" alt="Iphone 6" />
                    <div className="caption">
                        <h3>Iphone 6 Plush</h3>
                        <p>
                            16.000.000 VND
                        </p>
                        <p>
                            <a className="btn btn-primary">Mua Hang</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
