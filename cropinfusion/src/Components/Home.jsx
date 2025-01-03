import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <main
        className="d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/view-ancient-egyptian-civilization-culture_23-2151735476.jpg?t=st=1726397766~exp=1726401366~hmac=3da06642801afe80719bc716aaaef8f5d7ce39e863515339b60a1aae5f406a71&w=1800')",
          backgroundSize: 'cover',
          minHeight: '110vh',
          position: 'relative',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        ></div>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 2, minHeight: '100vh' }}>
          <h1 className="text-white fw-bold mb-4">
            Welcome to CropInfusion - Paddy Care
          </h1>
          <p className="text-light fs-4 mb-4">
            CropInfusion is your go-to platform for predicting and enhancing paddy crop yields. Our state-of-the-art prediction models and expert advice ensure you get the best results for your crops.
          </p>
          <Link to="/prediction">
            <button className="btn btn-success btn-lg">
              Get Started
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;