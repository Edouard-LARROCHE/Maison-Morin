import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../Loader';

const Fruits = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('http://localhost:5500/picture/patisserie/fruit');
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
    <div className="Macarons-headBand">
      <div className="Macarons-enterText">
        <h1>MACARONS</h1>
        <p className='Presentation-macarons'>Nos macarons sont fabriqués de manière artisanale avec uniquement des ingrédients et colorants naturels, peu sucrés révèlent la puissance et la finesse de chaque saveur,
          chocolat noir, vanille, pistache, framboise, caramel... Le plus? Toujours dans une démarche végétale afin de mieux respecter l'environnement et vontre santé, la maison morin
          vous propose des macarons entièrement végétales.
        </p>
      </div>
      <p className='cons-degus'>
          Conservation & dégustation: Nos macarons se dégustent frais. Nous vous conseillons une conservation de 6 jours au réfrigérateur, ne pas congeler afin de garantir toutes les qualités organoleptiques optimales.
      </p>        
    </div>        
      
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
      <div className='text-order'>
        <p>PASSER COMMANDE.</p>
        <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>
          EN PRÉVISION D'UN FUTUR SERVICE DE COMMANDE, MERCI DE COMMANDER POUR L'INSTANT DIRECTEMENT PAR MAIL OU TÉLÉPHONE.
        </p>
        <br />
        <div className='line2' />
      </div>
    </>
  );
};

export default Fruits;
