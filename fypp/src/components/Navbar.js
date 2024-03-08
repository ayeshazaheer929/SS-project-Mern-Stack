import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export class Navbar extends Component {
  render() {
    return (
        
      <div>
      
      <nav className="navbar navbar-expand-lg bg-white" style={{
               
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <div className="container-fluid">
        <a className="navbar-brand text-black" href="#">
          Sehat Sakoon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to="/ConsultDoctor">
                Consult Doctor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to="/GetMed">
                Get Medicine
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to="/HealthBlogs">
                Health Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to="/ContactUs">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to="AboutUs">
                About Us
              </Link>
              
            </li>
            {/* ... (other list items) ... */}
          </ul>

          
          <div>
          <Link to="/login"> 
            <Button
      className="mt-3"
      variant="primary"
      style={{
        background: 'linear-gradient(to right, #783cd7, #783cd7 )',
        border: 'none',
      }}
      
    >
      Login / Register
    </Button>
    </Link>
          </div>
          
        </div>
      </div>
    </nav>
      <container/>

      </div>
      
    )
  }
}

export default Navbar
