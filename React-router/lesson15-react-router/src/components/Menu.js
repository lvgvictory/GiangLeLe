import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name : 'Trang Chu',
        to : '/',
        exact : true
    },
    {
        name : 'Gioi Thieu',
        to : '/about',
        exact : false
    },
    {
        name : 'Lien He',
        to : '/contact',
        exact : false
    },
    {
        name : 'San Pham',
        to : '/products',
        exact : false
    },
    {
        name : 'Dang Nhap',
        to : '/login',
        exact : false
    }
];

//Custom Link
const MenuLink = ({
    label,
    to,
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active abc' : '';

                return (
                    <li className={`my-li ${active}`}>
                        <Link  to={to} className="my-link">{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {/* <li>
                        <NavLink exact activeStyle={{
                            backgroundColor : 'white',
                            color : 'red'
                        }} to="/" className="my-link">Trang Chu</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{
                            backgroundColor : 'white',
                            color : 'red'
                        }} to="/about" className="my-link">Gioi Thieu</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{
                            backgroundColor : 'white',
                            color : 'red'
                        }} to="/contact" className="my-link">Lien He</NavLink>
                    </li> */}


                    {/* <li>
                        <NavLink exact activeClassName="active" to="/" className="my-link">Trang Chu</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about" className="my-link">Gioi Thieu</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact" className="my-link">Lien He</NavLink>
                    </li> */}


                    {/* <li className="active">
                        <NavLink exact to="/" className="my-link">Trang Chu</NavLink>
                    </li>
                    <li className="active">
                        <NavLink to="/about" className="my-link">Gioi Thieu</NavLink>
                    </li>
                    <li className="active">
                        <NavLink to="/contact" className="my-link">Lien He</NavLink>
                    </li> */}
                    
                    {/* Custom link */}
                    { this.showMenus(menus) }
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }

        return result;
    }
}

export default Menu;
