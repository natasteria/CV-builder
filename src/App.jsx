import NavBar from "./components/NavBar"
import Form from "./components/Form"
import CV from "./components/CV";
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
  return(
    <div className="app">
       <NavBar />
      {/* <Form /> */}
      <CV {...mockCVProps}/>
    </div>
  )
}

export default App
