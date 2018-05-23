import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (            
            <div className="row mt-15">
                {/*Search*/}
                <Search />
                {/*End Search*/}
                {/*Sort*/}
                <Sort />
                {/*End Sort*/}
            </div>
        );
    }
}

export default Control;
