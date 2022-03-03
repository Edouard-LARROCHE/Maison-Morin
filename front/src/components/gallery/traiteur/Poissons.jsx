import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Loader';

const Poissons = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('http://localhost:5500/picture/traiteur/poisson');
        // console.log(res);
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
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className='grid'>
          {data.map((index) => (
            <div className='photos' key={index._id}>
              <img className='img-gallerie' src={index.pictureUrl} alt='Photos-produits' />
              <div className='icones'>
                <div className='instagram'>
                  <a className='fab fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/maison_morin/?hl=fr'>
                    {''}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Poissons;
