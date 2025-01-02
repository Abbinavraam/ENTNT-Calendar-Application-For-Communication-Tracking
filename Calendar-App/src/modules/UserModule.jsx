import React, { useState } from "react";
import CalendarView from "../components/CalendarView";
import "./UserModule.css";

function UserModule() {
  const [events, setEvents] = useState([
    { id: "1", title: "LinkedIn Post for CV Corp", date: "2024-12-26" },
    { id: "2", title: "Call with Private Ltd", date: "2024-12-27" },
    { id: "3", title: "Email to Industrial", date: "2024-12-28" },
  ]);

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [communicationType, setCommunicationType] = useState("");
  const [communicationDate, setCommunicationDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleEventClick = (eventDetails) => {
    alert(`Event Details:\n${eventDetails.title}\n${eventDetails.date}`);
  };

  const handleCommunicationSubmit = () => {
    if (selectedCompanies.length === 0 || !communicationType || !communicationDate) {
      alert("Please fill in all required fields.");
      return;
    }
    
    const updatedEvents = selectedCompanies.map((company) => ({
      id: Math.random().toString(),
      title: `${communicationType} for ${company}`,
      date: communicationDate,
    }));

    setEvents((prevEvents) => [...prevEvents, ...updatedEvents]);
    setSelectedCompanies([]);
    setCommunicationType("");
    setCommunicationDate("");
    setNotes("");
    alert("Communication logged successfully.");
  };

  return (
    <div className="user-module-container">
      <h1>User Module</h1>

      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="dashboard-grid">
          {/* Example Dashboard Grid */}
          <div className="dashboard-row">
            <div className="company-name">CV Corp</div>
            <div className="last-communications">LinkedIn Post - 5th January</div>
            <div className="next-communication">Email - 10th February</div>
          </div>
          {/* Add rows dynamically based on data */}
        </div>
      </div>

      <div className="communication-section">
        <h2>Log Communication</h2>
        <div className="form-group">
          <label>Select Company:</label>
          <input
            type="text"
            value={selectedCompanies}
            onChange={(e) => setSelectedCompanies(e.target.value.split(","))}
            placeholder="Enter company names separated by commas"
          />
        </div>

        <div className="form-group">
          <label>Type of Communication:</label>
          <select
            value={communicationType}
            onChange={(e) => setCommunicationType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="LinkedIn Post">LinkedIn Post</option>
            <option value="Email">Email</option>
            <option value="Call">Call</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Communication:</label>
          <input
            type="date"
            value={communicationDate}
            onChange={(e) => setCommunicationDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any additional notes here"
          ></textarea>
        </div>

        <button onClick={handleCommunicationSubmit}>Log Communication</button>
      </div>

      <div className="calendar-section">
        
        <CalendarView events={events} onEventClick={handleEventClick} />
      </div>
    </div>
  );
}

export default UserModule;
