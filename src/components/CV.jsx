import '../styles/CV.css'
import Button from './Button';

function CV({ name, email, phone, university, studyTopic, dateOfStudy, companyName, positionTitle, responsibiltes, dateFrom, dateUntil, editHandler }) {
  return (
    <div className="cv-container">
      <div className="personalInfo">
        <div className='section-title'>Personal</div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        })}</p>
      </div>

      <div className="educational-Background">
        <div className="section-title">Education</div>
        <p>{university}</p>
        <p>{studyTopic}</p>
        <p>{dateOfStudy}</p>
      </div>

      <div className="practical-Background">
        <div className="section-title">Experience</div>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>{responsibiltes}</p>
        <p>{dateFrom} - {dateUntil}</p>
      </div>

      <Button label="Edit CV" onClick={editHandler} />
    </div>
  );
}


export default CV
