
// import the ability to remember
import { useState } from "react";

// The main component - (a function...)
// Accept data and setData from App.jsx
export default function Education({ data, setData }) {
  // state for education data


  

    const [isSubmitted, setIsSubmitted] = useState(false);

  // Func to sync inputs with state
  const handleChange = (e) => { 
    const { name, value } = e.target;
    // Update the state in App.jsx
    setData({ ...data, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };


  const handleEdit = () => {
    setIsSubmitted(false);
  };

//   View component mode
  if (isSubmitted) {
    return (
      <div className="section">
        <h2>Education</h2>
        <p>
          <strong>School:</strong> {data.schoolName}
        </p>
        <p>
          <strong>Title:</strong> {data.title}
        </p>
        <p>
          <strong>Date:</strong> {data.date}
        </p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  // the following runs only if isSubmitted still false!

  return (
    <div className="section">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="schoolName"
          placeholder="School Name"
          value={data.schoolName}
          onChange={handleChange}
        />
        <input
          name="title"
          placeholder="Title of Study"
          value={data.title}
          onChange={handleChange}
        />
        <input
          name="date"
          type="text"
          placeholder="Date of Study (e.g. 2020-2023)"
          value={data.date}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
