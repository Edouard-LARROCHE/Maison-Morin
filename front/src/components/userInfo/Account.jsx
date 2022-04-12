import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <div className='account'>
        <h1>Information du compte</h1>
      </div>
      <div className='user-info'>
        <h3>Prénom : {userData.firstName}</h3>
        <h3>Nom : {userData.lastName}</h3>
        <h3>Adresse e-mail : {userData.email}</h3>
      </div>
    </>
  );
};

export default Account;
