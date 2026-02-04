// src/components/GeneralInfo.jsx

// Generalinfo.jsx

// import the ability to remember
import { useState } from "react";

// The main component - (a function...)
export default function GeneralInfo({ data, setData }) {
  
  // A switch
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Func to update state as typing
  const handleChange = (e) => {
    // Pick from input which field
    // is changing (name)
    // and what's in it (value)
    const { name, value } = e.target;
    // setInfo - Creates a new object
    // ... copy the existing
    // and only the text typed got changed
    setData({ ...data, [name]: value });
  };

  // 4. Function to "lock" the info
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // 5. Function to "unlock" the info for editing
  const handleEdit = () => {
    setIsSubmitted(false);
  };

  // If the form SENT:
  //Show on screen the end output:
  if (isSubmitted) {
    return (
      <div className="section">
        <h2>General Information</h2>
        <p>
          <strong>Name:</strong> {data.fullName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phoneNumber}
        </p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  // the following runs only if isSubmitted still false!

  return (
    <div className="section">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={data.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={data.phoneNumber}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
