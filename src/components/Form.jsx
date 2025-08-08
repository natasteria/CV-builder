import { useState } from 'react';
import '../styles/form.css'
import Button from './Button'

function InputFields({ title, onChange, inputFieldDetails}) {
  return (
    <div className="form-input">
      <h2>{title}</h2>
      <div>
        {inputFieldDetails.map((field) => {
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}: </label>
              {field.type === "textarea" ? ( <textarea  id={field.id} name={field.id} placeholder={field.placeholder || ""}  rows="3" required onChange={onChange} value={field.value}/> ) : (
              <input type={field.type} id={field.id} name={field.id} placeholder={field.placeholder || ""} required onChange={onChange} value={field.value}/>
            )}
            </div>
            
          );
        })}
      </div>
    </div>
  );
}




function Form({submitHandler, prevFieldData={} }) {
  const [inputValues, setInputValues] = useState(prevFieldData);

  function getUserEnteredValues(e){
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputValues(prev => ({...prev, [inputName]: inputValue}))
  }

  return (
    <form className='form-container' onSubmit={(e) => submitHandler(e, inputValues)}>
      <InputFields title='General Information' onChange={getUserEnteredValues} inputFieldDetails={[
        {label: "Name", type: "text", id:"name", value: inputValues.name || ""}, 
        {label: "Email", type: "email", id:"email", placeholder: "abc@gmail.com", value: inputValues.email || ""},
        {label: "Phone", type: "tel", id:"phone", placeholder: "0911223344 or +251911223344", value: inputValues.phone || ""}
      ]} />

        <InputFields title='Educational Background' onChange={getUserEnteredValues} inputFieldDetails={[
        {label: "University", type: "text", id:"university", value: inputValues.university || ""}, 
        {label: "Title of Study", type: "text", id:"studyTopic", value: inputValues.studyTopic || ""},
        {label: "Date of study", type: "date", id:"dateOfStudy", value: inputValues.dateOfStudy || ""}
      ]} />

        <InputFields title='Practical Background' onChange={getUserEnteredValues} inputFieldDetails={[
        {label: "Company Name", type: "text", id:"companyName", value: inputValues.companyName || ""}, 
        {label: "Position Title", type: "text", id:"positionTitle", value: inputValues.positionTitle || ""},
        {label: "Main Responsibilties of Job", type: "textarea", id:"responsibiltes", value: inputValues.responsibiltes || ""},
        {label: "Date From",  type: "date", id: "dateFrom", value: inputValues.dateFrom || ""},
        {label: "Date Until",  type: "date", id: "dateUntil", value: inputValues.dateUntil || ""},
      ]} />

      <Button label="Build CV"  />


    </form>
  )
}

export default Form;
