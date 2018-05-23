import React, { Component } from 'react';

class SizeSetting extends Component {

    changSize(value) {
        this.props.onChangeSize(value);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : { this.props.fontSize }px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={ () => this.changSize(-2) }>Giam</button>
                    <button type="button" className="btn btn-success" onClick={ () => this.changSize(+2) }>Tang</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
