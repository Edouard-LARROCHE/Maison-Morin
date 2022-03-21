import React from 'react';
import { Link } from 'react-router-dom';

const CardMenu = (props) => {
  return (
    <>
      <Link to={`/${props.link}`}>
        <div className='card-menu'>
          <img src={props.img} alt='MAISON-MORIN' />
          <h2 className='desc'> {props.descHover} </h2>
          <h1 className='desc-hover'> {props.desc} </h1>
        </div>
      </Link>
    </>
  );
};

export default CardMenu;
