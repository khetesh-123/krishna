import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import "./HeritEdgeDiary.scss";
import Footer from "../Footer";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import { MapPin, X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirect

const HeritEdgeDiary = () => {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    location: "",
    image: null,
    caption: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for showing login popup
  const navigate = useNavigate(); // Hook to handle redirects

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/check-auth",
          { withCredentials: true }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Authentication error:", error);
        setError("Please log in to view and add diary entries.");
        setShowLoginPopup(true); // Show login popup when authentication fails
      }
    };

    checkAuth();
  }, []);

  const fetchEntries = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/diary-entries",
        { withCredentials: true }
      );
      setEntries(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching entries:", error);
      setError("Failed to fetch diary entries. Please try again later.");
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchEntries();
    }
  }, [user, fetchEntries]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEntry((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newEntry.location && newEntry.image && newEntry.caption) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/diary-entries",
          newEntry,
          { withCredentials: true }
        );
        setEntries([response.data.entry, ...entries]);
        setNewEntry({ location: "", image: null, caption: "" });
        setShowModal(false);
        setError(null);
      } catch (error) {
        console.error("Error creating entry:", error);
        setError("Failed to create diary entry. Please try again.");
      }
    }
  };

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  // Handle login popup
  const handleLoginRedirect = () => {
    navigate("/Login"); // Redirect to login page
    setShowLoginPopup(false); // Close the popup
  };

  if (!user) {
    return (
      <div className="heritage-diary">
        <DashboardNavBar />
        <main className="diary-content">
          <h1>Heritage Diary</h1>
          <p>{error || "Please log in to view and add diary entries."}</p>
        </main>
        <Footer />
        
        {/* Login popup */}
        {showLoginPopup && (
          <div className="login-popup-overlay" onClick={() => setShowLoginPopup(false)}>
            <div className="login-popup" onClick={(e) => e.stopPropagation()}>
              <h2>You need to log in to access this page</h2>
              <button onClick={handleLoginRedirect}>Go to Login</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="heritage-diary">
      <DashboardNavBar />
      <main className="diary-content">
        <h1>Heritage Diary</h1>

        {error && <p className="error-message">{error}</p>}
        {loading ? (
          <p>Loading entries...</p>
        ) : (
          <div className="diary-grid">
            {entries.length > 0 ? (
              entries.map((entry) => (
                <div key={entry._id} className="diary-card">
                  <div className="location">
                    <MapPin size={20} />
                    <span>{entry.location}</span>
                  </div>
                  <div className="image-container">
                    <img src={entry.image} alt={entry.location} />
                  </div>
                  <div className="caption">{entry.caption}</div>
                </div>
              ))
            ) : (
              <p>No entries found. Add a new entry to get started.</p>
            )}

            <button className="add-more-btn" onClick={openModal}>
              Add more
            </button>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                <X size={24} />
              </button>

              <h2>Add New Entry</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={newEntry.location}
                    onChange={(e) =>
                      setNewEntry((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Image</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                  />
                  {newEntry.image && (
                    <div className="image-preview">
                      <img src={newEntry.image} alt="Preview" />
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label>Caption</label>
                  <input
                    type="text"
                    value={newEntry.caption}
                    onChange={(e) =>
                      setNewEntry((prev) => ({
                        ...prev,
                        caption: e.target.value,
                      }))
                    }
                    placeholder="Enter caption"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Add Entry
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HeritEdgeDiary;
