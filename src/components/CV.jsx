import '../styles/CV.css'

function CV({name, email, phone, university, titleOfStudy, dateOfStudy, companyName, positionTitle, mainResponsibitles, dateFrom, dateUpto}) {
    const now = Date.now;
  return (
    <div>
      <div className="personalInfo">
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
        <p>{university}</p>
        <p>{titleOfStudy}</p>
        <p>{dateOfStudy}</p>
      </div>

        <div className="practical-Background">
         <p>{companyName}</p>
         <p>{positionTitle}</p>
         <p>{mainResponsibitles}</p>
         <p>{dateFrom}</p>
         <p>{dateUpto}</p>
      </div>
    </div>
  )
}

export default CV
