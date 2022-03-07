import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Loader';

const Cakes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('http://localhost:5500/picture/patisserie/cake');
        setData(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='text-acceuil-fetch'>
        <p>PRODUITS ARTISANAUX ELABORÉS DANS NOS CUISINES, AU QUOTIDIEN.</p>
        <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>NOS PÂTISSERIES</p>
        <br />
        <div className='line2' />
      </div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className='fetch-card'>
          {data.map((index) => (
            <div key={index._id}>
              <div className='photos'>
                <img className='img-gallerie' src={index.pictureUrl} alt='Photos-produits' />
                <div className='icones'>
                  <div className='instagram'>
                    <a className='fab fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/maison_morin/?hl=fr'>
                      {''}
                    </a>
                  </div>
                </div>
              </div>
              <div className='info-card'>
                <p> {index.name} </p>
                <p> {index.price} </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cakes;
