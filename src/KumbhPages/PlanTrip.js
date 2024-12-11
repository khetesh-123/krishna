import React, { useState, useEffect } from "react";
import "./PlanTrip.scss";
import KumbhNavBar from "./KumbhNavBar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const places = [
  { id: 1, name: "Trimbakeshwar Temple", category: "historical", budget: "normal", address: "Trimbak, Nashik, Maharashtra 422212" },
  { id: 2, name: "Pandavleni Caves", category: "historical", budget: "economy", address: "Trimbak Rd, Nashik, Maharashtra 422212" },
  { id: 3, name: "Coin Museum", category: "artCulture", budget: "normal", address: "Govardhan, Nashik, Maharashtra 422001" },
  { id: 4, name: "Ramshej Fort", category: "historical", budget: "economy", address: "Near Trimbak, Nashik, Maharashtra 422212" },
  { id: 5, name: "Kalaram Sansthan Mandir", category: "historical", budget: "normal", address: "Panchavati, Nashik, Maharashtra 422003" },
  { id: 6, name: "Shree Saptashrungi", category: "historical", budget: "normal", address: "Saptashrungi Gad, Vani, Nashik, Maharashtra 422303" },
  { id: 7, name: "Someshwar Waterfall & Temple", category: "historical", budget: "normal", address: "Someshwar, Nashik, Maharashtra 422212" },
  { id: 8, name: "Gorakhgad Fort", category: "historical", budget: "economy", address: "Igatpuri, Nashik, Maharashtra" },
  { id: 9, name: "Nashik Fort (Killa)", category: "historical", budget: "economy", address: "Nashik City, Maharashtra" },
  { id: 10, name: "Muktidham Temple", category: "historical", budget: "normal", address: "Muktidham, Nashik, Maharashtra 422001" },
  
  { id: 11, name: "Saptashrungi Nivasini Temple", category: "artCulture", budget: "normal", address: "Saptashrungi Gad, Nashik, Maharashtra 422303" },
  { id: 12, name: "Gargoti Museum", category: "artCulture", budget: "normal", address: "Sinnar, Nashik, Maharashtra 422102" },
  { id: 13, name: "Nashik Kala Nirman", category: "artCulture", budget: "normal", address: "Nashik City, Maharashtra" },
  { id: 14, name: "Anjneri Hill", category: "artCulture", budget: "economy", address: "Anjneri, Nashik, Maharashtra 422002" },
  { id: 15, name: "Vivekanand Statue", category: "artCulture", budget: "normal", address: "Panchavati, Nashik, Maharashtra" },
  { id: 16, name: "Nashik Tribal Museum", category: "artCulture", budget: "economy", address: "Pandit Nehru Park, Nashik, Maharashtra 422002" },
  { id: 17, name: "Kumbh Mela Museum", category: "artCulture", budget: "normal", address: "Nashik, Maharashtra 422001" },
  { id: 18, name: "Trimbak Saptashrungi", category: "artCulture", budget: "economy", address: "Trimbak, Nashik, Maharashtra" },
  { id: 19, name: "Jain Mandir", category: "artCulture", budget: "economy", address: "Near Railway Station, Nashik, Maharashtra" },
  { id: 20, name: "Shree Yashwant Vithoba Mandir", category: "artCulture", budget: "normal", address: "Nashik, Maharashtra" },
  
  { id: 21, name: "Gangapur Dam", category: "nature", budget: "economy", address: "Gangapur, Nashik, Maharashtra 422222" },
  { id: 22, name: "Nashik Garden", category: "nature", budget: "normal", address: "Nashik City, Maharashtra" },
  { id: 23, name: "Vaitarna Dam", category: "nature", budget: "luxury", address: "Igatpuri, Nashik, Maharashtra" },
  { id: 24, name: "Bhasker Nadi", category: "nature", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 25, name: "Dhamangaon Lake", category: "nature", budget: "economy", address: "Dhamangaon, Nashik, Maharashtra" },
  { id: 26, name: "Panchavati Garden", category: "nature", budget: "normal", address: "Panchavati, Nashik, Maharashtra" },
  { id: 27, name: "Kalaram Temple Garden", category: "nature", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 28, name: "Anjneri Hill & Waterfall", category: "nature", budget: "economy", address: "Anjneri, Nashik, Maharashtra 422002" },
  { id: 29, name: "Saptashrungi Waterfall", category: "nature", budget: "economy", address: "Saptashrungi, Nashik, Maharashtra" },
  { id: 30, name: "Trimbakeshwar Temple Garden", category: "nature", budget: "normal", address: "Trimbak, Nashik, Maharashtra 422212" },
  
  { id: 31, name: "Ramshej Fort", category: "adventure", budget: "economy", address: "Ramshej, Nashik, Maharashtra 422212" },
  { id: 32, name: "Harishchandragad Fort", category: "adventure", budget: "economy", address: "Near Igatpuri, Nashik, Maharashtra" },
  { id: 33, name: "Bhandardara Lake", category: "adventure", budget: "luxury", address: "Bhandardara, Nashik, Maharashtra" },
  { id: 34, name: "Kalsubai Peak", category: "adventure", budget: "luxury", address: "Kalsubai, Nashik, Maharashtra" },
  { id: 35, name: "Brahmagiri Hill Trek", category: "adventure", budget: "economy", address: "Trimbak, Nashik, Maharashtra" },
  { id: 36, name: "Vajreshwari Hot Springs", category: "adventure", budget: "normal", address: "Vajreshwari, Nashik, Maharashtra" },
  { id: 37, name: "Nashik Trekking Trails", category: "adventure", budget: "economy", address: "Nashik City, Maharashtra" },
  { id: 38, name: "Wilson Hills", category: "adventure", budget: "luxury", address: "Nashik, Maharashtra" },
  { id: 39, name: "Harishchandragad Waterfalls", category: "adventure", budget: "economy", address: "Igatpuri, Nashik, Maharashtra" },
  { id: 40, name: "Malshej Ghat", category: "adventure", budget: "luxury", address: "Malshej Ghat, Nashik, Maharashtra" },
  
  { id: 41, name: "Sula Vineyards", category: "shopping", budget: "luxury", address: "Sula Vineyards, Nashik, Maharashtra 422003" },
  { id: 42, name: "Nashik Road Market", category: "shopping", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 43, name: "Pandit Jawaharlal Nehru Market", category: "shopping", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 44, name: "Nashik Central Mall", category: "shopping", budget: "normal", address: "Nashik, Maharashtra" },
  { id: 45, name: "Sula Fest Market", category: "shopping", budget: "luxury", address: "Sula Vineyards, Nashik, Maharashtra 422003" },
  { id: 46, name: "Market Yard", category: "shopping", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 47, name: "Khanapur Market", category: "shopping", budget: "economy", address: "Khanapur, Nashik, Maharashtra" },
  { id: 48, name: "Shree Laxmi Market", category: "shopping", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 49, name: "Shivaji Market", category: "shopping", budget: "economy", address: "Nashik, Maharashtra" },
  { id: 50, name: "Godavari Market", category: "shopping", budget: "economy", address: "Nashik, Maharashtra" }
];


const PlanTrip = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    duration: 1,
    freeTime: { "Day 1": "10:00-18:00" },
    startDate: "",
    endTime: "08:00",
    timeFormat: "AM",
    interests: {
      historical: 0,
      artCulture: 0,
      nature: 0,
      adventure: 0,
      shopping: 0,
      food: 0,
    },
    companion: "",
    budget: "",
  });
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5000/api/check-auth");
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Authentication check failed:", error);
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    filterPlaces();
  }, [formData.interests, formData.budget]);

  const filterPlaces = () => {
    const filtered = places.filter((place) => {
      const interestMatch = formData.interests[place.category] > 50;
      const budgetMatch =
        formData.budget === place.budget || formData.budget === "";
      return interestMatch && budgetMatch;
    });
    setFilteredPlaces(filtered.slice(0, 4));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDurationChange = (increment) => {
    const newDuration = Math.max(1, formData.duration + increment);
    updateFormData("duration", newDuration);
  };

  const handleFinalSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/plan-trip", {
        ...formData,
        suggestedPlaces: filteredPlaces,
      });
      console.log("Trip plan saved:", response.data);
      navigate("/Schedule");
    } catch (error) {
      console.error("Error saving trip plan:", error);
      if (error.response && error.response.status === 401) {
        alert("Your session has expired. Please log in again.");
        navigate("/login");
      } else {
        alert(
          "An error occurred while saving your trip plan. Please try again."
        );
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">⏱️</span>
              <h3>Travel Duration</h3>
            </div>
            <p>Enter the number of days for your trip.</p>
            <div className="duration-control">
              <button onClick={() => handleDurationChange(-1)}>−</button>
              <span>
                {formData.duration} day{formData.duration > 1 ? "s" : ""}
              </span>
              <button onClick={() => handleDurationChange(1)}>+</button>
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">🕒</span>
              <h3>Free Time</h3>
            </div>
            <p>Set your available free time for each day</p>
            <div className="time-selector">
              <h4>Day 1</h4>
              <div className="time-range">
                <input
                  type="text"
                  value={formData.freeTime["Day 1"]}
                  onChange={(e) =>
                    updateFormData("freeTime", { "Day 1": e.target.value })
                  }
                  placeholder="e.g., 10:00-18:00"
                />
              </div>
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">📅</span>
              <h3>Start Date</h3>
            </div>
            <p>Choose the start date for your trip</p>
            <div className="calendar-container">
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => updateFormData("startDate", e.target.value)}
              />
            </div>
            <div className="time-format">
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => updateFormData("endTime", e.target.value)}
              />
              <div className="format-buttons">
                <button
                  className={formData.timeFormat === "AM" ? "active" : ""}
                  onClick={() => updateFormData("timeFormat", "AM")}
                >
                  AM
                </button>
                <button
                  className={formData.timeFormat === "PM" ? "active" : ""}
                  onClick={() => updateFormData("timeFormat", "PM")}
                >
                  PM
                </button>
              </div>
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 4:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">🎯</span>
              <h3>Your Interests</h3>
            </div>
            <p>Indicate your level of interest for each category</p>
            <div className="interests-list">
              {Object.entries({
                historical: "Historical",
                artCulture: "Art & Culture",
                nature: "Nature",
                adventure: "Adventure",
                shopping: "Shopping",
                food: "Food",
              }).map(([key, label]) => (
                <div key={key} className="interest-item">
                  <label>{label}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.interests[key]}
                    onChange={(e) => {
                      const newInterests = {
                        ...formData.interests,
                        [key]: parseInt(e.target.value),
                      };
                      updateFormData("interests", newInterests);
                    }}
                  />
                  <span>{formData.interests[key]}%</span>
                </div>
              ))}
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 5:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">👥</span>
              <h3>Travel Companion</h3>
            </div>
            <p>Select your travel group type</p>
            <div className="companion-options">
              {["Solo", "Couple", "Family", "Friends"].map((type) => (
                <button
                  key={type}
                  className={`companion-button ${
                    formData.companion === type ? "active" : ""
                  }`}
                  onClick={() => updateFormData("companion", type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 6:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">💰</span>
              <h3>Your Budget</h3>
            </div>
            <p>
              Select your preferred budget type to help us recommend suitable
              accommodations, activities, and experiences.
            </p>
            <div className="budget-options">
              {["Economy", "Normal", "Luxury"].map((type) => (
                <button
                  key={type}
                  className={`budget-button ${
                    formData.budget === type.toLowerCase() ? "active" : ""
                  }`}
                  onClick={() => updateFormData("budget", type.toLowerCase())}
                >
                  {type}
                </button>
              ))}
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 7:
        return (
          <div className="form-step">
            <div className="icon-title">
              <span className="icon">🗺️</span>
              <h3>Suggested Places</h3>
            </div>
            <p>Based on your preferences, here are some suggested places:</p>
            <div className="suggested-places">
              {filteredPlaces.map((place) => (
                <div key={place.id} className="place-item">
                  <h4>{place.name}</h4>
                  <p>Category: {place.category}</p>
                  <p>Budget: {place.budget}</p>
                </div>
              ))}
            </div>
            <button className="next-button" onClick={handleFinalSubmit}>
              Plan my trip
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <KumbhNavBar />
      <div className="plan-trip-container">
        <div className="header">
          <h1>Let Nashik's beauty inspire your journey</h1>
          <h2>Plan your trip today!</h2>
        </div>
        <div className="form-container">{renderStep()}</div>
      </div>
      <Footer />
    </>
  );
};

export default PlanTrip;
