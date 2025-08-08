import {useState} from 'react'

import NavBar from "./components/NavBar"
import Form from "./components/Form"
import CV from "./components/CV"
import './App.css'

const mockCVProps = {
  name: "Nathan Abiy",
  email: "nathan.abiy@example.com",
  phone: "+251911223344",
  university: "Addis Ababa University",
  titleOfStudy: "Computer Science",
  dateOfStudy: "2019 - 2023",
  companyName: "Tech Solutions PLC",
  positionTitle: "Frontend Developer",
  mainResponsibitles: "Developed and maintained user interfaces using React and modern web technologies.",
  dateFrom: "Jan 2024",
  dateUpto: "Present"
};



function App() {

 const [formInputValues, setFormInputValues] = useState({});
 const [mode, setMode] = useState(0);

  function handleFormSubmit(e, {name, email, phone, university, studyTopic, dateOfStudy, companyName, positionTitle, responsibiltes, dateFrom, dateUntil}){
    e.preventDefault();
    setFormInputValues({name, email, phone, university, positionTitle, studyTopic, dateOfStudy, companyName, responsibiltes, dateFrom, dateUntil});
    setMode(1);
  }

  function handleEditButton(){
    setMode(0);
    console.log(formInputValues)
  }

  return(
    <div className="app">
       <NavBar currentMode={mode}/>
      {mode === 0 ? <Form prevFieldData={formInputValues} submitHandler={handleFormSubmit} /> : <CV {...formInputValues} editHandler={handleEditButton}/>}
    </div>
  )
}

export default App
