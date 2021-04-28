import React,{ useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => { 
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
   const [formData, setFormData]= useReducer(formReducer,{});
   const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }


  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return(
    <div className="wrapper"><center>
      <h1>Demo Form Example</h1>
      {
        submitting &&
        <div> submitting Form..
          <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           First Name: {" "}<input name="name" onChange={handleChange} />
         </label><br/>
         <label>
           Last Name: {" "}<input name="name" onChange={handleChange} />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
       
      </form></center>
    </div>
  )
}

export default App;