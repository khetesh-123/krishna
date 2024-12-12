import React, { useState } from "react";
import "./NearFoodPlace.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
import thali from "../Images/Food_illustration.jpg";
import sayantaraImg from "../Images/sayantara.jpg";
import budhaHalwaiImg from "../Images/budha-halwai.jpg";
import shoukinBhelImg from "../Images/shaukin-bhel.jpg";
import nadanThaliImg from "../Images/sadhana.jpg";
import shagunThaliImg from "../Images/shagun.jpg";
import samarthJuiceImg from "../Images/samarth.jpg";

// Food Card Component
const FoodCard = ({ name, address, image, onClick }) => {
  return (
    <div className="food-container" onClick={onClick}>
      <div className="food-card">
        <div className="card-content">
          <div className="text-content">
            <h3>{name}</h3>
            <p>
              <span className="location-icon">📍</span>
              {address}
            </p>
          </div>
          <div className="image-content">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Details Panel Component
const DetailsPanel = ({ details, onClose }) => {
  if (!details) return null;

  const { name, address, image, description, reviews } = details;

  return (
    <div className="details-panel">
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p><strong>Address:</strong> {address}</p>
      <div className="reviews">
        <h3>Reviews:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
      <div className="directions">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

const NearFoodPlace = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const foodPlaces = [
    {
      name: "Sayantara",
      address:
        "Shop No.5, Deshpande Building, Shop No.113, Bhadrakali Fruit Market, 1419, Bhadrakali Rd, Bhadrakali, Koknipura, Nashik",
      image: sayantaraImg,
      description: "A popular spot for traditional Maharashtrian thalis.",
      reviews: [
        "Delicious food and great ambiance!",
        "Authentic flavors, a must-visit place.",
      ],
    },
    {
      name: "Budha Halwai",
      address:
        "Behind Bhadrakali Mandir Road, Naikwadi Pura, Tivandha chowk, Nashik",
      image: budhaHalwaiImg,
      description: "Famous for its sweets and savory snacks.",
      reviews: [
        "Best pedas in town!",
        "The quality has been consistently great for years."
      ],
    },
    {
      name: "Shoukin Bhel",
      address:
        "Shop no. 3, Nikunj apt, near, Vidya Vikas Cir, Yashogandha Society, Patil Colony, Canada Corner, Nashik",
      image: shoukinBhelImg,
      description: "A go-to place for street-style bhel puri and snacks.",
      reviews: [
        "Perfect balance of flavors!",
        "Highly recommended for bhel lovers."
      ],
    },
    {
      name: "Nadan Thali",
      address:
        "Laxmi Vijay Commercial complex Jatra Hotel Road, Aurangabad Rd, Nandur Naka, Nashik",
      image: nadanThaliImg,
      description: "Experience authentic thalis at their best.",
      reviews: [
        "Affordable and tasty meals.",
        "Feels like home-cooked food."
      ],
    },
    {
      name: "Shagun Thali",
      address:
        "Seawood Park, Gangapur Rd, beside Linen Club, nr. Khatib Dairy, Old Gangapur Naka, Shreerang Nagar, Nashik",
      image: shagunThaliImg,
      description: "Perfect for family dining with traditional dishes.",
      reviews: [
        "Spacious seating and excellent food.",
        "Highly recommend their special thali."
      ],
    },
    {
      name: "Samarth Juice Centre",
      address:
        "Pethe High School Compound, Sarkar Wada, Raviwar Karanja, Panchavati, Nashik",
      image: samarthJuiceImg,
      description: "Refreshing juices and quick snacks.",
      reviews: [
        "The best juice center in the area!",
        "Fresh and healthy drinks."
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* Dashboard Navbar */}
      <DashboardNavBar />

      {/* Main Content */}
      <div className="near-food-place">
        {/* Page Title */}
        <div className="title">
          <img src={thali} alt="Thali" />
          <h2>Nearby Food Places</h2>
        </div>

        {/* Food Cards */}
        {foodPlaces.map((place, index) => (
          <FoodCard
            key={index}
            name={place.name}
            address={place.address}
            image={place.image}
            onClick={() => setSelectedPlace(place)}
          />
        ))}

        {/* Details Panel */}
        <DetailsPanel
          details={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      </div>

      {/* Footer & Robot */}
      <Robot />
      <Footer />
    </div>
  );
};

export default NearFoodPlace;
