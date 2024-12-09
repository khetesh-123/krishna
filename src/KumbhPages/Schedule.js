import React, { useState, useEffect } from "react";
import "./Schedule.scss";
import KumbhNavBar from "./KumbhNavBar";
import Footer from "../Footer";
import ramkund from "../Images/nashik.jpg";
import grape from "../Images/grape_embassy.jpg";
import swami from "../Images/swami_narayan.png";
import kapaleshwar from "../Images/kapaleshwar.jpg";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the start of the week (Sunday)
  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - day);
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
  };

  // Function to generate week dates
  const generateWeekDates = (startOfWeek) => {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      const dayName = day.toLocaleDateString("en-US", { weekday: "short" });
      weekDates.push({
        day: dayName,
        date: day.getDate(),
        fullDate: day,
      });
    }
    return weekDates;
  };

  // Effect to update the dates whenever currentDate changes
  useEffect(() => {
    const startOfWeek = getStartOfWeek(currentDate);
    const weekDates = generateWeekDates(startOfWeek);
    setDates(weekDates);
    setSelectedDate(new Date().getDate()); // Select current date by default
  }, [currentDate]);

  // Handle navigation for next and previous week
  const handleNavigation = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7); // Move by a week
    setCurrentDate(newDate);
  };

  const locations = [
    {
      name: "RamKund",
      time: "10:00 am to 12:00 pm",
      image: ramkund,
      day: 1,
    },
    {
      name: "Grape Embassy",
      time: "1:00 pm to 2:30 pm",
      image: grape,
      day: 1,
    },
    {
      name: "Swami Narayan Mandir",
      time: "3:00 pm to 5:30 pm",
      image: swami,
      day: 1,
    },
    {
      name: "Kapaleshwar Mandir",
      time: "6:00 pm to 7:30 pm",
      image: kapaleshwar,
      day: 1,
    },
  ];

  // Get the name of the current month
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });

  return (
    <>
      <KumbhNavBar />
      <div className="schedule-container">
        <div className="calendar-section">
          <div className="calendar-header">
            <h2>{monthName}</h2>
            <div className="calendar-nav">
              <button
                className="nav-button"
                onClick={() => handleNavigation(-1)}
              >
                &lt;
              </button>
              <button
                className="nav-button"
                onClick={() => handleNavigation(1)}
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="calendar-grid">
            {dates.map((item) => (
              <div
                key={item.date}
                className={`calendar-cell ${
                  selectedDate === item.date ? "selected" : ""
                }`}
                onClick={() => setSelectedDate(item.date)}
              >
                <div className="day">{item.day}</div>
                <div className="date">{item.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-info">
                <div className="day-label">Day {location.day}</div>
                <h3>{location.name}</h3>
                <p>{location.time}</p>
              </div>
              <div className="location-image">
                <img src={location.image} alt={location.name} />
              </div>
              <button
                className="directions-button"
                onClick={() => navigate('/Map')}
              >
                Directions
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
