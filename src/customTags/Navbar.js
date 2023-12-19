import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <div className=''>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}  `}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#"><b>{props.title}</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">{props.aboutText}</Link>
              </li> */}
            </ul>
            
            <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.switchMode} id="flexSwitchCheckDefault"/>
                <label className={`form-check-label" htmlFor="flexSwitchCheckDefault" style=${props.mode} mx-2`}>Enable dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired

}

Navbar.defaultProps = {
  title: 'set company name ',
  aboutText: 'About us',
  homeText: 'set text home',
  mode : 'light',
}


