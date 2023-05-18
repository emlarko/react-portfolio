import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { validateEmail } from '../utils/helpers';

const styles = {
  formButton: {
    background: '#a99985',
    color: '#f5f1ed',
    width: '150px', 
  },
};

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!name) {
        setErrorMessage('Name is required');
        return;
    }

    if (!text) {
        setErrorMessage('Text is required');
        return;
    }

    setName('');
    setEmail('');
    setText('');
  };

  return (
    <div className='row'> 
    <h2>Contact</h2>
    <hr />
      <div className='col-lg-6 col-md-6 col-sm-12'>
      
      <form className="form">
      
      <p>Please fill out the below form with any queries:</p>
        <div className="form-group">
        <input className='form-input' 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        </div>
        <div className="form-group">
        <input className='form-input'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        </div>
        <div className="form-group">
        <textarea className='form-input' rows="8"
          value={text}
          name="text"
          onChange={handleInputChange}
          type="text"
          placeholder="Query"
        />
        </div>
        <button type="submit"  className="btn" style={styles.formButton}  onClick={handleFormSubmit}>
          Submit
        </button>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <ul className='contact'>
          <li><a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"style={{color: "#a99985",}}/> Email me</a></li>
          <li><a href="https://github.com/emlarko"><FontAwesomeIcon icon={faGithub} size="2xl" className="fa-icon" style={{color: "#a99985",}} /> Check out my projects on GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Form;