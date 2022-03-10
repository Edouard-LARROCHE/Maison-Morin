import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayLogin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:5500/login')
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {data.map((index) => (
        <div key={index}>
          <h4>Nom et mot de passe actuel: </h4>
          <p> {index.name} </p>
          <p> {index.password} </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayLogin;
