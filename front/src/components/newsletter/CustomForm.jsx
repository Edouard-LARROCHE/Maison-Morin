import React from 'react';

const timeOut = () => {
  setTimeout(hideSuccess, 5000);
  setTimeout(hideError, 5000);
  function hideError() {
    document.querySelector('.customFormError').style.display = 'none';
  }
  function hideSuccess() {
    document.querySelector('.customFormSuccess').style.display = 'none';
  }
};

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  const handle = (e) => {
    submit();
    timeOut();
  };

  return (
    <>
      <div className='email-nl'>
        {status === 'sending' && <div className='customFormSending'>Envoie en cours...</div>}
        {status === 'error' && <div className='customFormError' dangerouslySetInnerHTML={{ __html: 'Erreur, réessayez' }} />}
        {status === 'success' && <div className='customFormSuccess' dangerouslySetInnerHTML={{ __html: 'Mail bien enregistré, merci !' }} />}
        <input
          className='textfield-email'
          ref={(node) => (email = node)}
          tabIndex='1'
          type='email'
          id='email'
          name='email'
          placeholder='Votre adresse mail'
        />
      </div>
      <div className='btn-nl' onClick={handle}>
        <p>Je m'inscris</p>
      </div>
    </>
  );
};

export default CustomForm;
