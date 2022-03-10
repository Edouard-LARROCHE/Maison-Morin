import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const IndexAdmin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const handleUpdate = async () => {
    const updateData = {
      name: name,
      password: password,
    };
    await axios
      .get('http://localhost:5500/login', updateData)
      .then((res) => {
        setData(res.data);
        console.log(data);
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
      {data.map((index) => (
        <div key={index}>
          <p> {index.name} </p>
          <p> {index.password} </p>
        </div>
      ))}
    </div>
  );
};

export default IndexAdmin;
