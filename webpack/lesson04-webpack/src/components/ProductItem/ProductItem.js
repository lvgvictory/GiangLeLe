import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Con Hang' : 'Het Hang';
        var statusClass = product.status ? 'label label-success' : 'label label-warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>

                    <span className={statusClass}>{statusName}</span>

                </td>
                <td>

                    <Link 
                        to={`/product/${product.id}/edit`}
                        className="btn btn-info"
                    >
                        Sua
                    </Link>&nbsp;

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xoa
                    </button>

                </td>
            </tr>
        );
    }

    onDelete = (id) => {
        if (confirm('Ban co chac chan muon xoa ?')) { // eslint-disable-line
            this.props.onDelete(id);
        }
    }
}

export default ProductList;
