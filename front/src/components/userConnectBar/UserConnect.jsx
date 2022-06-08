import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../../AppContext';
import { useSelector } from 'react-redux';

const UserConnect = () => {
  const [letter, setLetter] = useState('');
  const uid = useContext(UidContext);
  const userFirstName = useSelector((state) => state.userReducer.firstName[0].toUpperCase());
  const userLastName = useSelector((state) => state.userReducer.lastName[0].toUpperCase());

  useEffect(() => {
    if (uid) {
      setLetter(userFirstName + '.' + userLastName);
    } else {
      setLetter('');
    }
  }, [uid, userFirstName, userLastName]);

  return (
    <div className='user-connect'>
      <p> {letter} </p>
    </div>
  );
};

export default UserConnect;
