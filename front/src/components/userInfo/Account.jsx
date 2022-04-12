import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className='account'>
      <h1>Info compte</h1>
      <p>Prénom : {userData.firstName}</p>
      <p>Nom : {userData.lastName}</p>
      <p>Adresse e-mail : {userData.email}</p>
    </div>
  );
};

export default Account;
