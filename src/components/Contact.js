import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { validateEmail } from '../utils/helpers';

function Form() { 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleStateChange= (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setSuccessMessage(`Thank you for your query`)
    }
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

// function Form() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [query, setQuery] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setQuery(inputValue);
//     }
//   };

//    const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setSuccessMessage(`Thank you for your query ${name}`)
//       setEmail('');
//       setName('');
//       setQuery('')
//     }
//   };

const handleChange = (e) => {
  e.preventDefault();
  if (e.target.name === 'email') {
    const isValid = validateEmail(e.target.value)
    if (!isValid) {
      setErrorMessage('Your email is invalid.');
    } else {
      setErrorMessage('');
    } 
  } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <div className='row'> 
    <h2 className='content'>Contact</h2>
    <hr />
      <div className='col-lg-6 col-md-6 col-sm-12'>
      
      <form className="form">
      
      <p>Please fill out the below form with any queries:</p>
        <div className="form-group">
        <input className='form-input' 
          placeholder="Name"
          onChange={handleStateChange}
          name="name"
          value={mailerState.name}
          onBlur={handleChange}
        />
        </div>
        <div className="form-group">
        <input className='form-input'
          placeholder="Email"
          onChange={handleStateChange}
          name="email"
          value={mailerState.email}
          onBlur={handleChange}
        />
        </div>
        <div className="form-group">
        <textarea className='form-input' rows="8"
          placeholder="Message"
          onChange={handleStateChange}
          name="message"
          value={mailerState.message}
          onBlur={handleChange}
        />
        </div>
        <button type="submit"  className="btn btn-primary" onClick={submitEmail}>
          Submit
        </button> <br />
        
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
             {successMessage && (
        <div>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
      </form>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <ul className='contact'>
          <li><a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"/> Email me</a></li>
          <li><a href="https://github.com/emlarko"><FontAwesomeIcon icon={faGithub} size="2xl" className="fa-icon"/> Check out my projects on GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Form;