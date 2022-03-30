import React, { useState } from 'react';
import axios from 'axios';
import DisplayLogin from './DisplayLogin';

const IndexAdmin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateData = {
      name: name,
      password: password,
    };
    await axios
      .put('http://localhost:5500/login/' + process.env.REACT_APP_ID, updateData)
      .then((res) => {
        setData(res.data);
        setName('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='update-login'>
      <h2>1. MODIFIER LE NOM ET MDP DE CONNEXION</h2>
      <div>
        <form>
          <input type='text' id='name' value={name} placeholder='Nom' onChange={(e) => setName(e.target.value)} />
          <input type='text' id='name' value={password} placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button type='submit' onClick={handleUpdate}>
          MODIFIER
        </button>
      </div>
      <DisplayLogin data={data} />
    </div>
  );
};

export default IndexAdmin;
