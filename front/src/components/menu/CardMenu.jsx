import React from 'react';

const CardMenu = (props) => {
  return (
    <div className='card-menu'>
      <img src={props.img} alt='MAISON-MORIN' />
      <h2 className='desc'> {props.descHover} </h2>
      <h1 className='desc-hover'> {props.desc} </h1>
    </div>
  );
};

export default CardMenu;
