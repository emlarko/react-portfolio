import React, { useState } from 'react';

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
      <div className='col-md-6'>
      
      <form className="form">
      <h3>Contact</h3>
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
    </div>
  );
}

export default Form;