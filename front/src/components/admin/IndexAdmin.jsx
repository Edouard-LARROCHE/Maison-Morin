import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      .put('http://localhost:5500/login/621f6aa824ffab4ecdeda3d4', updateData)
      .then((res) => {
        setData(res.data);
        console.log(data);
        setName('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Link to='/'>
        <button>Retour sur le site</button>
      </Link>
      <h3>Modifier le nom et mdp</h3>
      <div>
        <form>
          <input type='text' id='name' value={name} placeholder='Nom' onChange={(e) => setName(e.target.value)} />
          <input type='text' id='name' value={password} placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button type='submit' onClick={handleUpdate}>
          MODIFIER
        </button>
      </div>
      <DisplayLogin />
    </div>
  );
};

export default IndexAdmin;
