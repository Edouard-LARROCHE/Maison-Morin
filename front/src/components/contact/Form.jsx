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

  const succesMessage = () => {
    const mess = document.querySelector(".form-message");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    mess.innerHTML = 'Message envoyé';
    if (name && (email.match(regex)) && message) {
      mess.style.display = 'block';
    } else {
      mess.style.display = 'none';
    }
  };

  const timeOut = () => {
    const mess = document.querySelector(".form-message");
    setTimeout(hideElement, 4000);
    function hideElement() {
      mess.style.display = 'none'
    }
  };

  const errGlobal = () => {
    const messErr = document.querySelector('.form-err');
    messErr.innerHTML = 'Merci de remplir les champs requis *';
    if (message && email && name) {
      messErr.style.display = 'none';
    } else {
      messErr.style.display = 'block';
    }
  };

  const errMail = () => {
    const messMail = document.querySelector(".email-err");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    messMail.innerHTML = 'Renseigner un email correcte'
    if (email.match(regex)) {
      messMail.style.display = 'none';
    } else {
      messMail.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    succesMessage();
    errMail('');
    errGlobal('');
    timeOut();

    if (name && isEmail() && message) {
      sendBack('template_gvs6rqv', {
        name,
        lastName,
        tel,
        email,
        message,
      });
    } else {
      errMail(); errGlobal(); succesMessage();
    }
  };

  return (<>
    <div className='nom-err' />
    <TextField
      className='text-field-name'
      style={{ paddingBottom: '2rem' }}
      type='text'
      id='name'
      name='name'
      onChange={(e) => setName(e.target.value)}
      placeholder='Nom *'
      value={name}
    />
    <TextField
      className='text-field-last-name'
      style={{ paddingBottom: '2rem' }}
      type='text'
      id='lastName'
      name='lastName'
      onChange={(e) => setLastName(e.target.value)}
      placeholder='Prénom'
      value={lastName}
    />
    <div className="input-message">
      <div className="split">
        <TextField
          className='text-field-tel'
          style={{ paddingBottom: '2rem' }}
          type='tel'
          id='tel'
          name='tel'
          onChange={(e) => setTel(e.target.value)}
          placeholder='Téléphone'
          value={tel}
        />
        <div className="form-err"></div>
      </div>
    </div>
        <div className='email-err' />
        <TextField
          className='text-field-email'
          style={{ paddingBottom: '2rem' }}
          type='email'
          id='email'
          autoComplete='off'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Adresse mail *'
          value={email}
        />
    <div className='text-err' />
    <TextField
      className='text-field-message'
      style={{ paddingBottom: '2rem' }}
      multiline
      minRows={1}
      maxRows={6}
      type='textarea'
      id='message'
      name='message'
      onChange={(e) => setMessage(e.target.value)}
      placeholder='Message *'
      value={message}
    />
    <div className='form-message' />
    <div className='button' onClick={handleSubmit}>
      <div className='effect effect-1'>
        <p>Envoyer</p>
      </div>
    </div>
  </>
  );
};

export default Form;