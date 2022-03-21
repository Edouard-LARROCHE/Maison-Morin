import React from 'react';

const CardMenu = (props) => {
  return (
    <div>
      <img src={props.img} alt='MAISON-MORIN' />
      <h2> {props.desc} </h2>
    </div>
  );
};

export default CardMenu;
