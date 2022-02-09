import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendBack = (templatedId, variables) => {
    window.emailjs.send('service_ioi4pk3', templatedId, variables).then(() => {
      setName('');
      setLastName('');
      setTel('');
      setEmail('');
      setMessage('');
    });
  };

  const isEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      return true;
    } else {
      return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendBack('template_gvs6rqv', {
        name,
        lastName,
        tel,
        email,
        message,
      });
    }
  };

  return (
    <div className='form'>
      <form className='contact-form'>
        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '2rem' }}
          type='text'
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Nom *'
          value={name}
        />
        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '2rem' }}
          type='text'
          id='lastName'
          name='lastName'
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Prénom'
          value={lastName}
        />
        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '2rem' }}
          type='tel'
          id='tel'
          name='tel'
          onChange={(e) => setTel(e.target.value)}
          placeholder='Téléphone'
          value={tel}
        />
        <div className='email-err' />

        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '2rem' }}
          type='email'
          id='email'
          autoComplete='off'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Adresse mail *'
          value={email}
        />

        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '2rem' }}
          multiline
          minRows={2}
          maxRows={4}
          type='textarea'
          id='message'
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message *'
          value={message}
        />

        <div className='form-message' />
      </form>
      <p>Champs requis *</p>
      <div className='button' onClick={handleSubmit}>
        <div className='effect effect-1'>
          <p>Envoyer</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
