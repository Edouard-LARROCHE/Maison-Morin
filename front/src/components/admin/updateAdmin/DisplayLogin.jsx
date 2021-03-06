import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayLogin = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/admin')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [props.data]);

  return (
    <div>
      {data.map((index) => (
        <div key={index} className='show-login'>
          <h3>Nom et mot de passe actuel : </h3>
          <p> {index.name} </p>
          <p> {index.password} </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayLogin;
