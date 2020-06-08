import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-md bg-white navbar-dark">
            <div className="container">
                <NavLink className="navbar-brand clogo" to="/">Techpost</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto cnav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="activate">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="activate" to="/trendtech">Trend</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="activate" to="/contact">Be a writer</NavLink>
                        </li>    
                    </ul>
                </div>    
            </div>  
        </nav>
    )
}

export default Nav
