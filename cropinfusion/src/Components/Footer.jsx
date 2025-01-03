import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-success text-white py-4">
      <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center text-center text-md-left px-4">
        
        {/* About Us Section */}
        {/* <div className="mb-3 mb-md-0">
          <h5 className="text-uppercase fw-bold">About Us</h5>
          <p className="mb-0">Providing top-notch crop prediction solutions to enhance paddy yields.</p>
        </div> */}

        <div className="footer-contact">
          <h6 className="fw-bold mb-2 fs-5">About Us</h6>
          <p className="mb-0 text-white">Providing top-notch crop prediction solutions <br></br>to enhance paddy yields.</p>
        </div>

        {/* <nav className="footer-nav mb-3 mb-md-0">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Contact Us</Link>
            </li>
          </ul>
        </nav> */}

        <div className="footer-contact">
          <h6 className="fw-bold mb-2 fs-5">Contact Us</h6>
          <p className="mb-0 text-white">info@cropinfusion.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;