import '../styles/CV.css'
import Button from './Button';

function CV({ name, email, phone, university, studyTopic, dateOfStudy, companyName, positionTitle, responsibiltes, dateFrom, dateUntil, editHandler }) {
  return (
    <div className="cv-container">
      <div className="personalInfo">
        <div className='section-title'>Personal</div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>{new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        })}</p>
      </div>

      <div className="educational-Background">
        <div className="section-title">Education</div>
        <p>University: {university}</p>
        <p>Title of Study: {studyTopic}</p>
        <p>Completed Date: {dateOfStudy}</p>
      </div>

      <div className="practical-Background">
        <div className="section-title">Experience</div>
        <p>Company Name: {companyName}</p>
        <p>Position Title: {positionTitle}</p>
        <p>Main Responsibilities: {responsibiltes}</p>
        <p>Date From: {dateFrom} - Date Until: {dateUntil}</p>
      </div>

      <Button label="Edit CV" onClick={editHandler} />
    </div>
  );
}


export default CV
