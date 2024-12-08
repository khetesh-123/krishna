import React from "react";
import "./TemplePage.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
import sayantaraImg from "../Images/img18.jpg";
import budhaHalwaiImg from "../Images/kalaram.jpeg";
import shoukinBhelImg from "../Images/kapaleshwar.jpg";
import nadanThaliImg from "../Images/swami_narayan.png";
import shagunThaliImg from "../Images/slider7.jpg";
import samarthJuiceImg from "../Images/img3.jpg";

const TemplePage = () => {
  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-temple-place">
        <div className="title">
          <h2>Temples</h2>
        </div>
        <div className="temple-container">
          {/* Trimbekeshware temple Card */}
          <div className="temple-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Trimbekeshware</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Trimbakeshwar Rd, Anjaneri, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={sayantaraImg} alt="Sayantara" />
              </div>
            </div>
          </div>
        </div>
        {/* Kalaram Mandir temple Card */}
        <div className="temple-container">
          <div className="temple-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Kalaram Mandir</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Nirman upavan C-3, Sita Gufaa Rd, opposite Kalaram Temple East door, Panchavati, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={budhaHalwaiImg} alt="Budha Halwai" />
              </div>
            </div>
          </div>
        </div>

        {/* Kapaleshwar Mandir temple Card */}
        <div className="temple-container">
          <div className="temple-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Kapaleshwar Mandir</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Panchavati, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={shoukinBhelImg} alt="Shoukin Bhel" />
              </div>
            </div>
          </div>
        </div>


          {/* Swaminarayan Temple temple Card */}
        <div className="temple-container">
          <div className="temple-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Swaminarayan Temple</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Mumbai - Agra Rd, near Dental college Kevdivan, Panchavati, Nashik, Maharashtra 422003
                </p>
              </div>
              <div className="image-content">
                <img src={nadanThaliImg} alt="Swaminarayan Temple" />
              </div>
            </div>
          </div>
        </div>

          {/* Saptashringi Devi temple Card */}
        <div className="temple-container">
          <div className="temple-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Saptashringi Devi</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Shree Saptashrungi nivasini devi mandir,near datta mandir, Saptashurngi, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={shagunThaliImg} alt="Saptashringi Devi" />
              </div>
            </div>
          </div>
        </div>

        <div className="temple-container">
          {/* Gondeshwar Temple Centre temple Card */}
          <div className="temple-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Gondeshwar Temple Centre</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Gondeshwar temple road, vijay nagar, sinnar, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={samarthJuiceImg} alt="Gondeshwar Temple" />
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

export default TemplePage;
