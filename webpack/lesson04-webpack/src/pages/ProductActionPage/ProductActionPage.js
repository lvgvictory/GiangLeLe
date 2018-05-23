import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var { match, onEditProduct } = this.props;

        if (match) {
            var id = match.params.id;

            // callApi(`products/${id}`, 'GET', null).then(res => {
            //     var { id, name, price, status } = res.data;
            //     this.setState({
            //         id: id,
            //         txtName: name,
            //         txtPrice: price,
            //         chkbStatus: status
            //     });
            // });
            onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {        
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
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
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }

        if (id) { // update
            // http://localhost:3000/products/:id => HTTP Method: PUT
            // callApi(`products/${id}`, 'PUT', {
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack();
            // });
            this.props.onUpdateProduct(product);
        } else { //  create
            // callApi('products', 'POST', {
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack();
            //     // history.push('/'); them xong chuyen ve trang chu
            // });
            this.props.onAddProduct(product)
        }
        history.goBack();
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

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
