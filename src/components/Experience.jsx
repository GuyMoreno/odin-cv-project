
// import the ability to remember
import { useState } from "react";

// The main component - (a function...)
export default function Experience() {
  // state for education data


  const [exp, setExp] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    date: "",
  });

    const [isSubmitted, setIsSubmitted] = useState(false);

  // Func to sync inputs with state
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setExp({ ...exp, [name]: value });
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
        <h2>Practical Experience</h2>
        <p>
          <strong>Company:</strong> {exp.companyName}
        </p>
        <p>
          <strong>Position:</strong> {exp.positionTitle}
        </p>
        <p>
          <strong>Responsibilities:</strong> {exp.mainResponsibilities}
        </p>
        <p>
          <strong>Date:</strong> {exp.date}
        </p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  // the following runs only if isSubmitted still false!

  return (
    <div className="section">
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="companyName"
          placeholder="Company Name"
          value={exp.companyName}
          onChange={handleChange}
        />
        <input
          name="positionTitle"
          placeholder="Position Title"
          value={exp.positionTitle}
          onChange={handleChange}
        />
        <textarea
          name="mainResponsibilities"
          placeholder="Main Responsibilities"
          value={exp.mainResponsibilities}
          onChange={handleChange}
        />
        <input
          name="date"
          placeholder="Dates (from - until)"
          value={exp.date}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
