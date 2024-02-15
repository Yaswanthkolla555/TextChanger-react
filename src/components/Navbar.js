import React from 'react'
import PropTypes from 'prop-types'
import { NavLink,Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to="/" activeStyle={{ color: "white" }} className="nav-link" aria-current="page">Home</NavLink>
                {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus" activeStyle={{ color: "white" }}>{props.about}</NavLink>
              </li>
            </ul>
            <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label " for="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
            </div>
   
          </div>
        </div>
      </nav>
    </div>
  )
}
// checking if the tarnsfered proptype is string or not
Navbar.prototypes = {
  title: PropTypes.string.isRequired,
}
// insering default prop types
Navbar.defaultProps = {
  title: "TextChanger",
  about: "About Us"
}