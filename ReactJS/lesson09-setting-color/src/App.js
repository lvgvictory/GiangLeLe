import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color : 'red',
            fontSize : 12
        };

        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize1 = this.onChangeSize1.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
    }

    //Cach 1 dung bind o constructor
    onSetColor(params) {
        this.setState({
            color : params
        });
    }

    onChangeSize1(value) {
        //8 <= fontSize <= 36
        this.setState({
            fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <=36) ? this.state.fontSize + value : this.state.fontSize// +2 or -2
        });
    }

    onSettingDefault(value) {
        if (value) {
            this.setState({
                color : 'red',
                fontSize : 12
            });
        }
    }

    // shouldComponentUpdate() {
    //     console.log(this.state.fontSize);
    // }

   

    // Cach 2 dung arrow function
    // onSetColor = (params) => {
    //     this.setState({
    //         color : params
    //     });
    // }

    // onChangeSize1 = (value) => {
    //     //8 <= fontSize <= 36
    //     if (this.state.fontSize + value >= 8 && this.state.fontSize + value <=36) {
    //         this.setState({
    //             fontSize : this.state.fontSize + value // +2 or -2
    //         });
    //     }
    // }

    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <ColorPicker 
                        color={ this.state.color } 
                        onReceiveColor={ this.onSetColor } 
                    />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting 
                            fontSize={ this.state.fontSize } 
                            onChangeSize={ this.onChangeSize1 } 
                        />
                        <Reset onSettingDefault={ this.onSettingDefault } />
                    </div>
                    <Result 
                        color={ this.state.color } 
                        fontSize={ this.state.fontSize } 
                    />
                </div>
            </div>
        );
    }
}

export default App;
