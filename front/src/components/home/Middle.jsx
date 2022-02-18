import React from 'react';
import { data } from '../data/data';

const Second = () => {
  return (<>
      <div className="banner-second">
        <div className="title-second">
        </div>
        <div className="support-second">
        </div>
      </div>
      <div className="grid">
        {data.map((index) => (
          <div className="photos">
            <img className= 'img-gallerie' src={index.img} alt="oui"></img>
            <div className="icones">
              <div className="instagram">
                <a className='fab fa-instagram' href="https://www.facebook.com">{''}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
  </>);
};


export default Second;
