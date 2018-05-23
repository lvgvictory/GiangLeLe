import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2 className="panel-title">Danh sach san pham</h2>
                </div>
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ma</th>
                                <th>Ten</th>
                                <th>Gia</th>
                                <th>Trang Thai</th>
                                <th>Hanh Dong</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Product Item */}
                            {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ProductList;
