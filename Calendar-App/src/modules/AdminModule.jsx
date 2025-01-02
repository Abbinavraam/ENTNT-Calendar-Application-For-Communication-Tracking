import React, { useState } from "react";
import "./ManagementPanel.css";

function ManagementPanel() {
  const [organizationList, setOrganizationList] = useState([]);
  const [newOrganization, setNewOrganization] = useState({
    name: "",
    location: "",
    linkedinProfile: "",
    emailAddresses: "",
    contactNumbers: "",
    notes: "",
    communicationFrequency: "2 weeks",
  });
  const [organizationEditIndex, setOrganizationEditIndex] = useState(-1); 

  const [communicationChannels, setCommunicationChannels] = useState([
    { title: "LinkedIn Post", details: "Post on LinkedIn" },
    { title: "Email", details: "Send an email" },
  ]);
  const [newChannel, setNewChannel] = useState({ title: "", details: "" });
  const [channelEditIndex, setChannelEditIndex] = useState(-1); 
  
  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdateOrganization = () => {
    if (!newOrganization.name.trim()) {
      alert("Organization name is required.");
      return;
    }
    if (organizationEditIndex >= 0) {
      setOrganizationList((prev) =>
        prev.map((org, i) => (i === organizationEditIndex ? { ...newOrganization } : org))
      );
      setOrganizationEditIndex(-1);
    } else {
      setOrganizationList([...organizationList, { ...newOrganization }]);
    }
    setNewOrganization({
      name: "",
      location: "",
      linkedinProfile: "",
      emailAddresses: "",
      contactNumbers: "",
      notes: "",
      communicationFrequency: "2 weeks",
    });
  };

  const handleEditOrganization = (index) => {
    setNewOrganization(organizationList[index]);
    setOrganizationEditIndex(index);
  };

  const handleRemoveOrganization = (index) => {
    setOrganizationList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddOrUpdateChannel = () => {
    if (!newChannel.title.trim() || !newChannel.details.trim()) {
      alert("Channel title and details are required.");
      return;
    }
    if (channelEditIndex >= 0) {
      setCommunicationChannels((prev) =>
        prev.map((channel, i) => (i === channelEditIndex ? { ...newChannel } : channel))
      );
      setChannelEditIndex(-1);
    } else {
      setCommunicationChannels([...communicationChannels, { ...newChannel }]);
    }
    setNewChannel({ title: "", details: "" });
  };

  const handleEditChannel = (index) => {
    setNewChannel(communicationChannels[index]);
    setChannelEditIndex(index);
  };

  const handleRemoveChannel = (index) => {
    setCommunicationChannels((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Management Panel</h1>

      {/* Organization Management Section */}
      <section>
        <h2>Organization Management</h2>
        <div className="form">
          <h3>{organizationEditIndex >= 0 ? "Edit Organization" : "Add New Organization"}</h3>
          <input
            type="text"
            name="name"
            value={newOrganization.name}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
            placeholder="Organization Name"
          />
          <input
            type="text"
            name="location"
            value={newOrganization.location}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
            placeholder="Location"
          />
          <input
            type="text"
            name="linkedinProfile"
            value={newOrganization.linkedinProfile}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
            placeholder="LinkedIn Profile"
          />
          <input
            type="text"
            name="emailAddresses"
            value={newOrganization.emailAddresses}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
            placeholder="Email Addresses (comma-separated)"
          />
          <input
            type="text"
            name="contactNumbers"
            value={newOrganization.contactNumbers}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
            placeholder="Contact Numbers (comma-separated)"
          />
          <textarea
            name="notes"
            value={newOrganization.notes}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
            placeholder="Notes"
          />
          <select
            name="communicationFrequency"
            value={newOrganization.communicationFrequency}
            onChange={(e) => handleInputChange(e, setNewOrganization)}
          >
            <option value="2 weeks">Every 2 weeks</option>
            <option value="1 month">Every 1 month</option>
            <option value="3 months">Every 3 months</option>
          </select>
          <button onClick={handleAddOrUpdateOrganization}>
            {organizationEditIndex >= 0 ? "Update Organization" : "Add Organization"}
          </button>
        </div>

        <h3>Organization List</h3>
        <ul>
          {organizationList.map((org, index) => (
            <li key={index}>
              <strong>{org.name}</strong> - {org.location} <br />
              <button onClick={() => handleEditOrganization(index)}>Edit</button>
              <button onClick={() => handleRemoveOrganization(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Communication Channels Section */}
      <section>
        <h2>Communication Channels</h2>
        <div className="form">
          <h3>{channelEditIndex >= 0 ? "Edit Channel" : "Add New Channel"}</h3>
          <input
            type="text"
            name="title"
            value={newChannel.title}
            onChange={(e) => handleInputChange(e, setNewChannel)}
            placeholder="Channel Title"
          />
          <input
            type="text"
            name="details"
            value={newChannel.details}
            onChange={(e) => handleInputChange(e, setNewChannel)}
            placeholder="Channel Details"
          />
          <button onClick={handleAddOrUpdateChannel}>
            {channelEditIndex >= 0 ? "Update Channel" : "Add Channel"}
          </button>
        </div>

        <h3>Channel List</h3>
        <ul>
          {communicationChannels.map((channel, index) => (
            <li key={index}>
              <strong>{channel.title}</strong>: {channel.details} <br />
              <button onClick={() => handleEditChannel(index)}>Edit</button>
              <button onClick={() => handleRemoveChannel(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ManagementPanel;
