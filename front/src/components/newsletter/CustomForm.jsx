import React from 'react';

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });
    return (
        <>
            <div className='email-nl'>
                <input
                    className='textfield-email'
                    ref={node => (email = node)}
                    tabIndex="1"
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Votre adresse mail'
                />
            </div>
            <div className='btn-nl' onClick={submit}>
            <p>Je m'inscris</p>
            </div>
        </>
    );
};

export default CustomForm;