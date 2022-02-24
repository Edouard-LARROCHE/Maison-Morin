import React from 'react';
import { Link } from 'react-router-dom';

const DisplayScrollSecond = () => {
  return (
    <div className='display-second'>
      <div className='picture-header'>
        <img src='/assets/baron-champagne.png' alt='picute2' />
      </div>
      <div className='text-second'>
        <div className='head-text'>Une Gamme Préstigieuse</div>
        <div className='title-header'>
          <h1>LA CAVE À VIN</h1>
        </div>
        <div className='V-position'>
          <img className='V' src='/logo/V.png' alt='V' style={{ width: '2rem' }} />
        </div>
        <div className='text-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae, error laborum facere laudantium, fugiat sapiente molestiae a
            in vero consequuntur. Doloribus quia obcaecati commodi? Dolor natus ex facere dolore.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis consequuntur aperiam nostrum reiciendis ducimus eligendi accusantium
            possimus natus magnam sequi!
          </p>
        </div>
      </div>
      <div className='link-to'>
        <Link to='/maison-morin'>
          <p>DECOUVRIR NOTRE GAMME »</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayScrollSecond;
