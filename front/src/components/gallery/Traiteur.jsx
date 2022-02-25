import React from 'react';
import { data } from '../data/data';

const Traiteur = () => {
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
        {data.map((index) => (
          <div className='photos'>
            <img className='img-gallerie' src={index.img} alt='oui'></img>
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
    </>
  );
};

export default Traiteur;
