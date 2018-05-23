import React, { Component } from 'react';

// Cac viet ES6
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            	<div className="container-fluid">
            		<a className="navbar-brand">Bai 2: Component</a>
            		<ul className="nav navbar-nav">
            			<li>
            				<a>Trang Chu</a>
            			</li>
            			<li  className="active">
            				<a>Danh Muc San Pham</a>
            			</li>
            		</ul>
            	</div>
            </nav>
        );
    }
}

//Cach viet chua ES6
// function Header() {
//     return (
//         <div>
//             <h1>Header Component</h1>
//         </div>
//     )
// }

export default Header;
