import React, { useState, useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
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
          <div>
            <button style={{ margin: '2rem' }} className='log-button ' onClick={() => setValid('valid')}>
              <p>SUPPRIMER MON COMPTE</p>
            </button>
          </div>
          <div className={valid}>
            <div className='modal-valid'>
              <h3>Confirmez-vous la suppression ?</h3>
              <p>
                Vous vous apprêtez à supprimer votre compte Maison-Morin. Toutes les données relatives à votre compte utilisateur seront
                définitivement supprimées.
              </p>
              <div className='button-choisse'>
                <div className='button-close' onClick={close}>
                  <p>
                    ANNULER
                    <span>
                      <CloseIcon className='close' />
                    </span>
                  </p>
                </div>
                <div className='button-delete' onClick={deleteAccount}>
                  <p>
                    CONFIRMER
                    <span>
                      <DeleteIcon className='trash' />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
