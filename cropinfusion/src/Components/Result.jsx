import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

const Result = () => {
  const chartRef = useRef(null);
  const location = useLocation();
  const { diseaseName, detectionPercentage, npkData } = location.state || {};

  useEffect(() => {
    const ctx = document.getElementById('diseaseChart').getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Disease Detected', 'Healthy'],
        datasets: [{
          label: 'Disease Detection Percentage',
          data: [detectionPercentage, 100 - detectionPercentage],
          backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [detectionPercentage]);

  return (
    <div>
      <Header />
      <main
        className="main"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/view-ancient-egyptian-civilization-culture_23-2151735476.jpg?t=st=1726397766~exp=1726401366~hmac=3da06642801afe80719bc716aaaef8f5d7ce39e863515339b60a1aae5f406a71&w=1800')",
          backgroundSize: 'cover',
          minHeight: '110vh',
          position: 'relative',
          backgroundAttachment: 'fixed',
          paddingTop: '40px',
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

          <div style={{marginTop: '40px'}}></div>
        <div
          className="my-5 p-5 bg-white rounded-5 shadow"
          style={{
            zIndex: 2,
            maxWidth: '800px',
            padding: '40px',
            borderRadius: '12px',
          }}
        >
          <h2 className="text-danger fw-bold" style={{ marginTop: '20px' }}>
            Detected Disease: <span className="fw-bold">{diseaseName}</span> - <span>{detectionPercentage}%</span>
          </h2>

          <div className="my-4">
            <canvas id="diseaseChart" style={{ maxWidth: '400px', margin: '0 auto', display: 'block' }}></canvas>
          </div>

          <div className="additional-info mb-4">
            <h3 className="fw-bold text-dark">NPK Data of Diseased Plant</h3>
            <ul>
              <li><b>Nitrogen (N):</b> {npkData?.nitrogen}</li>
              <li><b>Phosphorus (P):</b> {npkData?.phosphorus}</li>
              <li><b>Potassium (K):</b> {npkData?.potassium}</li>
            </ul>
          </div>

          <div className="additional-info mb-4">
            <h3 className="fw-bold text-dark">Preventative Measures</h3>
            <ul>
              <li>Ensure proper crop rotation to avoid bacterial buildup in the soil.</li>
              <li>Avoid overwatering and keep plants well-spaced to reduce moisture retention.</li>
              <li>Use disease-resistant crop varieties whenever possible.</li>
            </ul>
          </div>

          <div className="additional-info mb-4">
            <h3 className="fw-bold text-dark">Treatment</h3>
            <ul>
              <li>Apply bactericides such as copper-based sprays.</li>
              <li>Remove and destroy infected plant parts.</li>
              <li>Consult a local agriculture expert for more targeted advice.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Result;