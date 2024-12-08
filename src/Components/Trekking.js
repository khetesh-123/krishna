import React from "react";
import "./Trekking.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
// import trekking from "../Images/trekking.png";
import sayantaraImg from "../Images/hairhar.jpeg.jpg";
import budhaHalwaiImg from "../Images/anjineri.jpeg.jpg";
import shoukinBhelImg from "../Images/ramshej.jpeg.jpg";
import nadanThaliImg from "../Images/dehargad.jpeg.jpg";
import shagunThaliImg from "../Images/salher.jpg";
import samarthJuiceImg from "../Images/Brahmagiri.jpg";

const Trekking = () => {
  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-trekking-place">
        <div className="title">
          {/* <img src={trekking} alt="Thali" /> */}
          <h2>Trekking Place</h2>
        </div>
        <div className="trekking-container">
          {/* Harihar Fort trekking Card */}
          <div className="trekking-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Harihar Fort</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Harihar fort / Harshagad is a fort located 40 km from Nashik
                  City, 48 km from Igatpuri, 40 km from Ghoti in Nashik
                  district, of Maharashtra, India
                </p>
              </div>
              <div className="image-content">
                <img src={sayantaraImg} alt="Harihar Fort" />
              </div>
            </div>
          </div>
        </div>

        {/* Anjaneri Fort trekking Card */}
        <div className="trekking-container">
          <div className="trekking-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Anjaneri Fort</h3>
                <p>
                  <span className="location-icon">📍</span>
                  anjaneri fort, trimbakeshwar, nashik district, maharashtra, 422213
                </p>
              </div>
              <div className="image-content">
                <img src={budhaHalwaiImg} alt="Anjaneri Fort" />
              </div>
            </div>
          </div>
        </div>

        {/*Ramshej Fort trekking Card */}
        <div className="trekking-container">
          <div className="trekking-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Ramshej Fort</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Ramsej or Ramshej Fort is a small fort located 10 kilometres north-west of Nashik, in the Indian state of Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={shoukinBhelImg} alt="Ramshej Fort" />
              </div>
            </div>
          </div>
        </div>

        {/* Dehergad Fort trekking Card */}
        <div className="trekking-container">
          <div className="trekking-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Dehergad Fort</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Dehergad,Old Girnare Gangapur Rd, Deherewadi, Maharashtra 422003
                </p>
              </div>
              <div className="image-content">
                <img src={nadanThaliImg} alt="Dehergad Fort" />
              </div>
            </div>
          </div>
        </div>

        {/* Salher Fort trekking Card */}
        <div className="trekking-container">
          <div className="trekking-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Salher Fort</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Salher Baglan, Nashik District, Maharashtra, 423302
                </p>
              </div>
              <div className="image-content">
                <img src={shagunThaliImg} alt="Salher Fort" />
              </div>
            </div>
          </div>
        </div>

        <div className="trekking-container">
          {/* Brahmagiri trekking Card */}
          <div className="trekking-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Brahmagiri</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Brahmagiri Metghar Killa, Maharashtra 422212
                </p>
              </div>
              <div className="image-content">
                <img src={samarthJuiceImg} alt="Brahmagiri" />
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

export default Trekking;
