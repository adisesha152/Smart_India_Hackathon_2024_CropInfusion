import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/agriculture.png';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute w-100" style={{ zIndex: 10 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
            <Link to="/" className="text-white fw-bold">
                <img src={Logo} alt="CropInfusion" className='rounded-2' style={{ width: '90px', height: '90px', marginLeft: '30px' }} />
            </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex justify-content-around w-50">
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/prediction">Prediction Form</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/result">Result</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/about">About Us</Link>
            </li>
        </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;