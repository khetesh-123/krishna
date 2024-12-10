import React, { useState } from "react";
import "./StudentNavBar.scss";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Calendar,
  FileText,
  Clock,
  FileBarChart,
} from "lucide-react";

const StudentNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="StudentNavBar">
      <div className="Logo">
        <Link to="/Student">Educational Portal</Link>
      </div>
      <nav className={isNavOpen ? "open" : ""}>
        <ul>
          <li>
            <Link to="/Student">
              <Home size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="StudentAttendance">
              <Calendar size={20} /> Attendance
            </Link>
          </li>
          <li>
            <Link to="StudentMarks">
              <FileText size={20} /> Marks
            </Link>
          </li>
          <li>
            <Link to="/StudentTimeTable">
              <Clock size={20} /> Time Table
            </Link>
          </li>
          <li>
            <Link to="StudentReportPage">
              <FileBarChart size={20} /> Report
            </Link>
          </li>
        </ul>
      </nav>
      <div className="MenuToggle" onClick={toggleNav}>
        {isNavOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
    </div>
  );
};

export default StudentNavBar;
