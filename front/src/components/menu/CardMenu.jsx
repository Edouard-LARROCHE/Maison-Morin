import React from 'react';

const CardMenu = (props) => {
  return (
    <div className='card-menu'>
      <img src={props.img} alt='MAISON-MORIN' />
      <h2> {props.descHover} </h2>
      <h2> {props.desc} </h2>
    </div>
  );
};

export default CardMenu;
