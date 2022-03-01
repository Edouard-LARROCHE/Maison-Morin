import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';
// import { data } from '../data/data';

const Traiteur = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get(' https://jsonplaceholder.typicode.com/todos');
        console.log(res);
        setData(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    setTimeout(() => {
      fetchData();
    }, 5000);
  }, []);

  return (
    <>
      <div className='banner-second'>
        <div className='title-second'>
          <h1>Retrouvez nos saveurs</h1>
        </div>
        <div className='support-second'>
          <h3>
            À la Maison-Morin, nous portons de l'importance à la qualité de nos produits, tant dans la saveur que dans l'aspesct, n'hésitez pas à
            consulter notre instagram pour vous donner encore plus envie de goûter nos créations.
          </h3>
        </div>
      </div>
      <div className='grid'>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>
            <h1>Data fetching</h1>
            {data.map((index) => (
              <div key={index.title}>
                <p> {index.title} </p>
              </div>
            ))}
          </div>
        )}

        {/* {data.map((index) => (
          <div className='photos' key={index.id}>
            <img className='img-gallerie' src={index.img} alt='oui'></img>
            <div className='icones'>
              <div className='instagram'>
                <a className='fab fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/maison_morin/?hl=fr'>
                  {''}
                </a>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Traiteur;
