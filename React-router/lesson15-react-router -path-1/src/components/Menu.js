import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

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
                    <MenuLink label="Trang Chu" to="/" activeOnlyWhenExact={true}></MenuLink>
                    <MenuLink label="Gioi Thieu" to="/about" activeOnlyWhenExact={false}></MenuLink>
                    <MenuLink label="Lien He" to="/contact" activeOnlyWhenExact={false}></MenuLink>
                </ul>
            </nav>
        );
    }
}

export default Menu;
