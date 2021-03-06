import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        const {logout, items, users, loggedIn} = this.props;

        return (
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Link className="navbar-brand" to="/">FS</Link>
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                                <NavLink className="nav-link" activeClassName="active" exact to="/hotels/all">List Hotels</NavLink>
                                {loggedIn && <NavLink className="nav-link" activeClassName="active" to="/create">Create Hotel</NavLink>}
                                {loggedIn && <NavLink className="nav-link" activeClassName="active" to="/profile">My Furniture</NavLink>}
                                {loggedIn && <a className="nav-link" href="javascript:void(0)" onClick={logout}>Logout</a>}
                                {!loggedIn && <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>}
                                {!loggedIn && <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>}
                                <span>{items} items in catalog</span>|
                                <span>{users} registered users</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}