import React from 'react'
import  { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Wise</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">Json Users</NavLink></li>
                    <li><NavLink to="/fetch">GitHub Users</NavLink></li>

                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter (Navbar)