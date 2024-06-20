import React from 'react'
import { NavLink } from 'react-router-dom'


const HeaderComponent = () => {

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-secondary'>
                <div>
                    <a href='http://localhost:3000' className='navbar-brand'>
                        Student Management Application
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                            <li className='nav-item'>
                            <NavLink to="/" className="nav-link"></NavLink>
                        </li>
                    </ul>

                </div>
                <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <NavLink to="/signup" className="nav-link">Register</NavLink>
                    </li>
                        <li className='nav-item'>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>

                    </ul>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent