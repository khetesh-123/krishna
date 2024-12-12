import React, { useState } from "react";
import "./VRBooking.scss";
import { Calendar, Clock, Headset } from "lucide-react";
import KumbhNavBar from "../KumbhPages/KumbhNavBar";
import Footer from "../Footer";

const VRBooking = () => {
  const [vrBooth, setVrBooth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);

  const handleBoothChange = (e) => setVrBooth(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);

  const handleSubmit = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
      setSubmittedDetails({ vrBooth, selectedDate, selectedTime });
    }, 2000); // Hide popup after 2 seconds
  };

  return (
    <>
      <KumbhNavBar />
      <div className="vr-booking">
        <div className="booking-container">
          <div className="booking-header">
            <div className="title-container">
              <Headset className="vr-icon" size={32} />
              <h1>Virtual Tour Booking</h1>
            </div>
            <p>Book your Virtual tour in a few steps!</p>
          </div>

          <div className="booking-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="vrBooth">Select VR Booth</label>
                <div className="input-container">
                  <select
                    id="vrBooth"
                    value={vrBooth}
                    onChange={handleBoothChange}
                  >
                    <option value="">Select a booth</option>
                    <option value="booth1">Booth 1</option>
                    <option value="booth2">Booth 2</option>
                    <option value="booth3">Booth 3</option>
                  </select>
                  <Headset className="input-icon" size={20} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <div className="input-container">
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                  <Calendar className="input-icon" size={20} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="time">Enter Time</label>
                <div className="input-container">
                  <input
                    type="time"
                    id="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                  />
                  <Clock className="input-icon" size={20} />
                </div>
              </div>
            </div>

            <button className="submit-button" onClick={handleSubmit}>
              Done
            </button>
          </div>

          {isPopupVisible && (
            <div className="popup">
              <div className="popup-content">
                <span className="popup-icon">✔</span>
                <p>Booking Confirmed!</p>
              </div>
            </div>
          )}

          {submittedDetails && (
            <div className="confirmation-table">
              <h2>Booking Details:</h2>
              <table>
                <thead>
                  <tr>
                    <th>VR Booth</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{submittedDetails.vrBooth}</td>
                    <td>{submittedDetails.selectedDate}</td>
                    <td>{submittedDetails.selectedTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VRBooking;