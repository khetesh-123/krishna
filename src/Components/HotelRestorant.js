import React from "react";
import "./HotelRestorant.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
// import HotelRestorantlogo from "../Images/misal_illustration.jpg";
import sayantaraImg from "../Images/Ginger.webp";
import budhaHalwaiImg from "../Images/Ginger.webp";
import shoukinBhelImg from "../Images/gateway.webp";
import nadanThaliImg from "../Images/flower-park.jpeg.jpg";
import shagunThaliImg from "../Images/8.jpeg.jpg";
import samarthJuiceImg from "../Images/Rarangan.jpg";

const HotelRestorant = () => {
  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-HotelRestorant-place">
        <div className="title">
          {/* <img src={HotelRestorantlogo} alt="HotelRestorant" /> */}
          <h2>Hotel and Restaurants</h2>
        </div>
        <div className="HotelRestorant-container">
          {/* Ginger Nashik HotelRestorant Card */}
          <div className="HotelRestorant-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Ginger Nashik</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Trimbakeshwar Rd, near Satpur, MIDC, Police Station, Nashik,
                  Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={sayantaraImg} alt="Ginger Nashik" />
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Panchavad Pride HotelRestorant Card */}
        <div className="HotelRestorant-container">
          <div className="HotelRestorant-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Hotel Panchavad Pride</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Hotel Panchavad Pride Dindori Rd, Adityakunj Society,
                  Panchavati, NashikMaharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={budhaHalwaiImg} alt="Hotel Panchavad Pride" />
              </div>
            </div>
          </div>
        </div>

        {/*Gateway Nashik HotelRestorant Card */}
        <div className="HotelRestorant-container">
          <div className="HotelRestorant-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Gateway Nashik</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Gateway Nashik P-17, Mumbai - Agra Rd, MIDC Ambad, Nashik,
                  422010, India
                </p>
              </div>
              <div className="image-content">
                <img src={shoukinBhelImg} alt="Gateway Nashik" />
              </div>
            </div>
          </div>
        </div>

        {/* Curry Leaves Bhavan HotelRestorant Card */}
        <div className="HotelRestorant-container">
          <div className="HotelRestorant-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Curry Leaves Bhavan</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Curry Leaves Bhavan, Near Cycle Circle, College Rd, Krishi
                  Nagar, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={nadanThaliImg} alt="Curry Leaves Bhavan" />
              </div>
            </div>
          </div>
        </div>

        {/* Flying Monk HotelRestorant Card */}
        <div className="HotelRestorant-container">
          <div className="HotelRestorant-card">
            <div className="card-content">
              <div className="text-content">
                <h3>Flying Monk</h3>
                <p>
                  <span className="location-icon">📍</span>
                  3rd floor, Archit Arcade, College Rd, behind Big Bazaar,
                  Ramdas Colony, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={shagunThaliImg} alt="Flying Monk" />
              </div>
            </div>
          </div>
        </div>

        <div className="HotelRestorant-container">
          {/* Tarangan Planetarium HotelRestorant Card */}
          <div className="HotelRestorant-card reversed">
            <div className="card-content">
              <div className="text-content">
                <h3>Tarangan Planetarium</h3>
                <p>
                  <span className="location-icon">📍</span>
                  Opp Asaram Bapu Aashram Bridge, Near Nandawan Lawns, Savarkar
                  Nagar Extension, Off, Gangapur Rd, Nashik, Maharashtra
                </p>
              </div>
              <div className="image-content">
                <img src={samarthJuiceImg} alt="Tarangan Planetarium" />
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

export default HotelRestorant;
