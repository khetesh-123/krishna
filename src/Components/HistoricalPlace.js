import React from "react";
import "./HistoricalPlace.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
import historical from '../Images/historical.png'
import sayantaraImg from "../Images/pandavleni.jpeg.jpg";
import budhaHalwaiImg from "../Images/gargoti.jpg";
import shoukinBhelImg from "../Images/coin-museum.jpg";
import nadanThaliImg from "../Images/artillery_museum.jpeg.jpg";
import shagunThaliImg from "../Images/ramshej.jpeg.jpg";
import samarthJuiceImg from "../Images/savarkar_wada.jpeg.jpg";

const HistoricalPlace = () => {
  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-historical-place">
        <div className="title">
        <img src={historical} alt="Thali" />
          <h2>Historical Plce</h2>
        </div>
        <div className="historical-container">
          {/* Pandavleni historical Card */}
          <div className="historical-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Pandavleni</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Located about 8km south of the center of Nashik , Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={sayantaraImg} alt="Pandavleni" />
              </div>
            </div>
          </div>
        </div>

        {/* Gargoti Museum historical Card */}
        <div className="historical-container">
          <div className="historical-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Gargoti Museum</h3>
                <p>
                  <span className="location-icon">📍</span>
                  D-59, MIDC, MIDC Area, Sinner, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={budhaHalwaiImg} alt="Gargoti Museum" />
              </div>
            </div>
          </div>
        </div>

        {/*Coin Museum historical Card */}
        <div className="historical-container">
          <div className="historical-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Coin Museum</h3>
                <p>
                  <span className="location-icon">📍</span>
                  INHCRF Campus, Opposite Grape County Resort, Near Vadholi, Trambakeshwar Rd, Phata, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={shoukinBhelImg} alt="Coin Museum" />
              </div>
            </div>
          </div>
        </div>

        {/* Aritillery Museum historical Card */}
        <div className="historical-container">
          <div className="historical-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Aritillery Museum</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Artillery Centre Rd, Aute Nagar, Gandhi Nagar Airport Area, Deolali Gaon, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={nadanThaliImg} alt="Aritillery Museum" />
              </div>
            </div>
          </div>
        </div>

        {/* Ramshej historical Card */}
        <div className="historical-container">
          <div className="historical-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Ramshej</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Ramshej Fort, Ramshej, Maharashtra 422003
                </p>
              </div>
              <div className="image-content">
                <img src={shagunThaliImg} alt="Ramshej" />
              </div>
            </div>
          </div>
        </div>

        <div className="historical-container">
          {/* Savarkar Wada Centre historical Card */}
          <div className="historical-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Savarkar Wada Centre</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Lakshmi Narayan Galli, near Post Office, Gosavi Wada, Vijay Nagar, Bhagur, Deolali, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={samarthJuiceImg} alt="Savarkar Wada" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Robot />
      <Footer />
    </div>
  );
};

export default HistoricalPlace;
