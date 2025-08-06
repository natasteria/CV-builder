import '../styles/form.css'

function InputFields({ title, inputFieldDetails }) {
  return (
    <div className="form-input">
      <h2>{title}</h2>
      <div>
        {inputFieldDetails.map((field) => {
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}: </label>
              {field.type === "textarea" ? ( <textarea  id={field.id} name={field.id} placeholder={field.placeholder || ""}  rows="3" required/> ) : (
              <input type={field.type} id={field.id} name={field.id} placeholder={field.placeholder || ""} required />
            )}
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

function Button({label}){
    return (
        <div className='button-container'>
            <button>{label}</button>
        </div>
    )
}


function Form() {
  return (
    <div className='form-container'>
      <InputFields title='General Information' inputFieldDetails={[
        {label: "Name", type: "text", id:"name"}, 
        {label: "Email", type: "email", id:"email", placeholder: "abc@gmail.com"},
        {label: "Phone", type: "tel", id:"phone", placeholder: "0911223344 or +251911223344"}
      ]} />

        <InputFields title='Educational Background' inputFieldDetails={[
        {label: "University", type: "text", id:"university"}, 
        {label: "Title of Study", type: "text", id:"study-topic"},
        {label: "Date of study", type: "date", id:"date-of-study"}
      ]} />

        <InputFields title='Practical Background' inputFieldDetails={[
        {label: "Company Name", type: "text", id:"company"}, 
        {label: "Position Title", type: "text", id:"position-title"},
        {label: "Main Responsibilties of Job", type: "textarea", id:"responsibiltes"},
        {label: "Date From",  type: "date", id: "date-from"},
        {label: "Date Until",  type: "date", id: "date-until"},
      ]} />

      <Button label="Build CV"></Button>


    </div>
  )
}

export default Form;
