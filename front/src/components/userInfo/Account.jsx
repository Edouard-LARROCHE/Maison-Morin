import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { UidContext } from '../../AppContext';
import { dateParser } from './DateConnect';

const Account = ({ handleLogout }) => {
  const [valid, setValid] = useState('valid-before');
  const userData = useSelector((state) => state.userReducer);
  const uid = useContext(UidContext);

  const close = () => {
    setValid('valid-before');
  };

  const deleteAccount = async () => {
    await axios
      .delete(`/api/user/${uid}`)
      .then(() => {
        handleLogout();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='account'>
        <h1>Information du compte</h1>
      </div>
      <div className='user-info'>
        <h3>Prénom : {userData.firstName}</h3>
        <h3>Nom : {userData.lastName}</h3>
        <h3>Adresse e-mail : {userData.email}</h3>
        <h3>Compte créé le : {dateParser(userData.createdAt)}</h3>
        <div className='delete-account'>
          <button style={{ margin: '2rem' }} className='log-button ' onClick={() => setValid('valid')}>
            <p>SUPRIMER MON COMPTE</p>
          </button>
          <div className={valid}>
            <p>confirmation de supréssion</p>
            <p onClick={close}>non</p>
            <p onClick={deleteAccount}>oui</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
