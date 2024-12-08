import React from "react";
import "./MisalSpot.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
import MisalSpotlogo from "../Images/misal_illustration.jpg";
import sayantaraImg from "../Images/sadhana.jpg";
import budhaHalwaiImg from "../Images/grape_embassy.jpg";
import shoukinBhelImg from "../Images/patlacha-wada.avif";
import nadanThaliImg from "../Images/peruchi_wadi.jpeg.jpg";
import shagunThaliImg from "../Images/Shamsunder_misal.jpeg.jpg";
import samarthJuiceImg from "../Images/MisalPav.jpg";

const MisalSpot = () => {
  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-MisalSpot-place">
        <div className="title">
          <img src={MisalSpotlogo} alt="MisalSpot" />
          <h2>MisalSpot Place</h2>
        </div>
        <div className="MisalSpot-container">
          {/* Sadhana Chulivarchi Misal MisalSpot Card */}
          <div className="MisalSpot-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Sadhana Chulivarchi Misal</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Shop No.5, Deshpande Building, Shop No.113, Bhadrakali Fruit
                  Market, 1419, Bhadrakali Rd, Bhadrakali, Koknipura, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={sayantaraImg} alt="Sadhana Chulivarchi Misal" />
              </div>
            </div>
          </div>
        </div>

        {/* Grape Embassy MisalSpot Card */}
        <div className="MisalSpot-container">
          <div className="MisalSpot-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Grape Embassy</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Near Suyojit Bridge, Road, Makhmalabad, Gangapur, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={budhaHalwaiImg} alt="Grape Embassy" />
              </div>
            </div>
          </div>
        </div>

        {/*Patilwada MisalSpot Card */}
        <div className="MisalSpot-container">
          <div className="MisalSpot-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Patilwada</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Near Suyojit Bridge, Road, Makhmalabad, Gangapur, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={shoukinBhelImg} alt="Patilwada" />
              </div>
            </div>
          </div>
        </div>

        {/* Peruchi Wadi MisalSpot Card */}
        <div className="MisalSpot-container">
          <div className="MisalSpot-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Peruchi Wadi</h3>
                <p>
                  <span className="location-icon">📍</span>
                   Mungsare Phata Makhmalabad Girnare, highway, Nashik,
                  Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={nadanThaliImg} alt="Peruchi Wadi" />
              </div>
            </div>
          </div>
        </div>

        {/* ShyamSundar MIsal MisalSpot Card */}
        <div className="MisalSpot-container">
          <div className="MisalSpot-card">
            <div className="card-content">
              <div className="text-content">
                <h3>ShyamSundar MIsal</h3>
                <p>
                  <span className="location-icon">📍</span>
                  H.No.704/0487, P.no.738, opposite Rungta High School, Ashok
                  Stambh, Nashik, Maharashtra 422001
                </p>
              </div>
              <div className="image-content">
                <img src={shagunThaliImg} alt="ShyamSundar MIsal" />
              </div>
            </div>
          </div>
        </div>

        <div className="MisalSpot-container">
          {/* Vitthala Misal MisalSpot Card */}
          <div className="MisalSpot-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Vitthala Misal</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Jijau Farms, Peth Rd, Shankar Nagar, Tavli Phata, Nashik,
                  Maharashtra 422003
                </p>
              </div>
              <div className="image-content">
                <img src={samarthJuiceImg} alt="Vitthala Misal" />
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

export default MisalSpot;
