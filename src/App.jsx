import {useState} from 'react'

import NavBar from "./components/NavBar"
import Form from "./components/Form"
import CV from "./components/CV"
import './App.css'

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
  }

  return(
    <div className="app">
       <NavBar currentMode={mode}/>
      {mode === 0 ? <Form prevFieldData={formInputValues} submitHandler={handleFormSubmit} /> : <CV {...formInputValues} editHandler={handleEditButton}/>}
    </div>
  )
}

export default App
