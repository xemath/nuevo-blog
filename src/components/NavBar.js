import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink
                to = '/'
                exact
                className = 'navbar-brand bebas'
            >
                Castro
            </NavLink>
            {/*<a className="navbar-brand bebas" href="/index.html">Castro</a>*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                    to = '/blog'
                    className = 'nav-link'
                    aria-current = 'page'
                    >
                        Posts    
                    </NavLink>
                  {/*<a className="nav-link" aria-current="page" href="/posts.html">Blog</a> */}
                </li>
                <li className="nav-item">
                    <NavLink to='/proyectos' className="nav-link" aria-current='page'>
                        Proyectos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link" aria-current='page'>
                        Acerca de mi
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/contact' className="nav-link" aria-current='page'>
                        Contactame
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>
    </nav>
        
    )
}
