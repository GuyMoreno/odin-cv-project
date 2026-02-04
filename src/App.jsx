// App.jsx
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import './styles/App.css'

function App() {
  // Lifting state up to the parent component
  // check
  const [infoData, setInfoData] = useState({ fullName: "", email: "", phoneNumber: "" });
  const [eduData, setEduData] = useState({ schoolName: "", title: "", date: "" });
  const [expData, setExpData] = useState({ companyName: "", positionTitle: "", mainResponsibilities: "", date: "" });
  return (
    <div className="App">
      <h1>CV Builder</h1>
      <div className="cv-container">
        <GeneralInfo data={infoData} setData={setInfoData} />
        <Education data={eduData} setData={setEduData} />
        <Experience data={expData} setData={setExpData} />
      </div>
    </div>
  );
}

export default App;
