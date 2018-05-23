import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            // >= 16.0
            // [
            //     <h1 key="1">
            //         Lap trinh ReactJS
            //     </h1>,
            //     <h1 key="2">
            //         Lap trinh Angular 4
            //     </h1>,
            //     <h1 key="3">
            //         Lap trinh Sass/Scss
            //     </h1>
            // ]

            // >= 16.2
            <React.Fragment>
                <h1>
                    Lap trinh ReactJS
                </h1>
                <h1>
                    Lap trinh Angular 4
                </h1>
                <h1>
                    Lap trinh Sass/Scss
                </h1>
            </React.Fragment>
        );
    }
}

export default App;
