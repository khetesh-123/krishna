import React from "react";
import "./otherPlace.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
// import otherPlacelogo from "../Images/misal_illustration.jpg";
import sayantaraImg from "../Images/trampolin.jpeg.jpg";
import budhaHalwaiImg from "../Images/Boat-club.jpg";
import shoukinBhelImg from "../Images/pahine.jpeg.jpg";
import nadanThaliImg from "../Images/flower-park.jpeg.jpg";
import shagunThaliImg from "../Images/birkpark.jpeg.jpg";
import samarthJuiceImg from "../Images/Rarangan.jpg";

const otherPlace = () => {
  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-otherPlace-place">
        <div className="title">
          {/* <img src={otherPlacelogo} alt="otherPlace" /> */}
          <h2>Other Place</h2>
        </div>
        <div className="otherPlace-container">
          {/* Trampoline Park otherPlace Card */}
          <div className="otherPlace-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Trampoline Park</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Shop No.5, Deshpande Building, Shop No.113, Bhadrakali Fruit Market, 1419, Bhadrakali Rd, Bhadrakali, Koknipura, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={sayantaraImg} alt="Trampoline Park" />
              </div>
            </div>
          </div>
        </div>

        {/* MTDC Boat Club otherPlace Card */}
        <div className="otherPlace-container">
          <div className="otherPlace-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>MTDC Boat Club</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Behind Bhadrakali Mandir Road, Naikwadi Pura, Tivandha chowk, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={budhaHalwaiImg} alt="MTDC Boat Club" />
              </div>
            </div>
          </div>
        </div>

        {/*Pahine Waterfall otherPlace Card */}
        <div className="otherPlace-container">
          <div className="otherPlace-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Pahine Waterfall</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Shop No.5, Deshpande Building, Shop No.113, Bhadrakali Fruit Market, 1419, Bhadrakali Rd, Bhadrakali, Koknipura, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={shoukinBhelImg} alt="Pahine Waterfall" />
              </div>
            </div>
          </div>
        </div>

        {/* Flower Park otherPlace Card */}
        <div className="otherPlace-container">
          <div className="otherPlace-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Flower Park</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Behind Bhadrakali Mandir Road, Naikwadi Pura, Tivandha chowk, Nashik
                </p>
              </div>
              <div className="image-content">
                <img src={nadanThaliImg} alt="Flower Park" />
              </div>
            </div>
          </div>
        </div>

        {/* Nandur Madhyameshwar Bird Sanctuary otherPlace Card */}
        <div className="otherPlace-container">
          <div className="otherPlace-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Nandur Madhyameshwar Bird Sanctuary</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Back to Nandur Madhyam eshwar water reserve dam, Chapadgaon, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={shagunThaliImg} alt="Nandur Madhyameshwar Bird Sanctuary" />
              </div>
            </div>
          </div>
        </div>

        <div className="otherPlace-container">
          {/* Vitthala Misal otherPlace Card */}
          <div className="otherPlace-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Ranangan</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Holaram Colony, Sharanpur, Nashik, Maharashtra 
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

export default otherPlace;
