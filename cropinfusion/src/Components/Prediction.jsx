import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Prediction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    crop: 'paddy',
    soil: 'clayey-soil',
    growthStage: 'vegetative',
    location: '',
    pincode: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    const api_key = '66e7b2e6e43e9802039893teg6bb183';
    try {
      const response = await axios.get(
        `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${api_key}`
      );
      const address = response.data.display_name || 'Address not found';
      setFormData({
        ...formData,
        location: address,
      });
    } catch (error) {
      console.error('Error with reverse geocoding:', error);
      alert('Unable to retrieve address. Please enter it manually.');
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Unable to retrieve your location. Please enter it manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageFileName = formData.image ? formData.image.name : 'unknown';

    const resultData = {
      imageFileName: imageFileName,
      diseaseName: 'Bacterial Blight',
      detectionPercentage: 85,
      npkData: {
        nitrogen: '50%',
        phosphorus: '35%',
        potassium: '20%',
      },
    };

    navigate('/result', { state: resultData });
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: '0px' }}>
        <main
          className="main d-flex align-items-center justify-content-center"
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
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 1,
            }}
          ></div>

          <div style={{ marginTop: '40px' }}></div>
          <div
            className="form-container container my-5 p-4 bg-white rounded-5 shadow"
            style={{
              zIndex: 2,
              maxWidth: '600px',
              padding: '40px',
              borderRadius: '12px',
            }}
          >
            <h2 className="text-center mb-4 text-success" style={{ marginTop: '20px' }}>
              Enter Crop Details
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="mb-4">
                <label htmlFor="crop" className="form-label fw-bold text-success">Crop Type</label>
                <select
                  id="crop"
                  name="crop"
                  className="form-select form-control-lg"
                  value={formData.crop}
                  onChange={handleChange}
                >
                  <option value="paddy">Paddy</option>
                  <option value="wheat">Wheat</option>
                  <option value="corn">Corn</option>
                </select>
              </div>

              {/* Soil Type */}
              <div className="mb-4">
                <label htmlFor="soil" className="form-label fw-bold text-success">Soil Type</label>
                <select
                  id="soil"
                  name="soil"
                  className="form-select form-control-lg"
                  value={formData.soil}
                  onChange={handleChange}
                >
                  <option value="clayey-soil">Clayey Soil</option>
                  <option value="alluvial-soil">Alluvial Soil</option>
                  <option value="black-cotton">Black Cotton Soil</option>
                  <option value="red-yellow">Red & Yellow Soil</option>
                  <option value="saline-alkaline">Saline and Alkaline Soil</option>
                  <option value="peaty-marshy">Peaty and Marshy Soil</option>
                </select>
              </div>

              {/* Growth Stage */}
              <label className="form-label fw-bold text-success">Growth Stage</label>
              <div className="mb-4 d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="growthStage"
                    id="vegetative"
                    value="vegetative"
                    checked={formData.growthStage === 'vegetative'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="vegetative">
                    Vegetative
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="growthStage"
                    id="reproductive"
                    value="reproductive"
                    checked={formData.growthStage === 'reproductive'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="reproductive">
                    Reproductive
                  </label>
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label htmlFor="location" className="form-label fw-bold text-success">Location</label>
                <div className="d-flex">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-control form-control-lg"
                    placeholder="Enter location or use map"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-success ms-2"
                    onClick={handleCurrentLocation}
                  >
                    Use Current Location
                  </button>
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label htmlFor="image" className="form-label fw-bold text-success">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control form-control-lg"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success btn px-5 py-3 shadow-sm">
                  Predict Disease
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Prediction;