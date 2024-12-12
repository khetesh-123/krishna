import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DirectionsManager from "../Components/DirectionsManager";
import "./ARVRPage.scss";

const ARVRPage = ({ userLocation, selectedNode, mode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    if (!localStorage.getItem("authToken")) {
      navigate("/login"); // Redirect to login page if not logged in
    }
  }, [navigate]);

  return (
    <div className="arvr-page">
      <h1>{mode === "AR" ? "Augmented Reality Mode" : "Virtual Reality Mode"}</h1>

      <div className="map-container">
        {/* DirectionsManager handles map and routing */}
        <DirectionsManager
          userLocation={userLocation}
          selectedNode={selectedNode}
          mode={mode}
        />
      </div>

      <div className="info-container">
        <p>
          Welcome to {mode === "AR" ? "Augmented Reality" : "Virtual Reality"} Mode.
          This feature provides an immersive experience to explore Kumbh Mela's
          significant locations. Use the map for directions and navigate with
          ease.
        </p>
      </div>
    </div>
  );
};

export default ARVRPage;
