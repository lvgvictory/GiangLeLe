import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        var { match } = this.props;

        if (match) {
            var id = match.params.id;

            callApi(`products/${id}`, 'GET', null).then(res => {
                var { id, name, price, status } = res.data;
                this.setState({
                    id: id,
                    txtName: name,
                    txtPrice: price,
                    chkbStatus: status
                });
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;

        if (id) { // update
            // http://localhost:3000/products/:id => HTTP Method: PUT
            callApi(`products/${id}`, 'PUT', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            });
        } else { //  create
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
                // history.push('/'); them xong chuyen ve trang chu
            });
        }
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3">

                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Ten San Pham</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Gia</label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Trang Thai</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                checked={chkbStatus}
                                value={chkbStatus}
                                onChange={this.onChange}
                            />
                            Con Hang
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Luu Lai</button>&nbsp;
                    <Link to="/product-list" className="btn btn-default">
                        Quay lai
                    </Link>
                </form>


            </div>

        );
    }
}

export default ProductActionPage;
