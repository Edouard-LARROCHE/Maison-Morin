import React from 'react';
import CardMenu from './CardMenu';

const DataMenu = () => {
  const dataMenu = [
    {
      id: 1,
      img: '/assets/traiteur.png',
      desc: 'TRAITEUR',
      descHover: 'TRAITEUR',
    },
    {
      id: 2,
      img: '/assets/patisserie10.jpeg',
      desc: 'PÂTISSERIES',
      descHover: 'PÂTISSERIES',
    },
    {
      id: 3,
      img: '/assets/selection-macaron2.jpeg',
      desc: 'MACARONS',
      descHover: 'MACARONS',
    },
    {
      id: 4,
      img: '/assets/Fond-vins-45.png',
      desc: 'CAVE À VINS',
      descHover: 'CAVE À VINS',
    },
    {
      id: 5,
      img: '/assets/cocktails-dinatoir.jpeg',
      desc: 'COCKTAILS DINATOIRE',
      descHover: 'COCKTAILS DINATOIRE',
    },
    {
      id: 6,
      img: '/assets/prod-except.jpeg',
      desc: "PRODUITS D'EXCEPTION",
      descHover: "PRODUITS D'EXCEPTION",
    },
  ];

  return (
    <div className='global-card-menu'>
      {dataMenu.map((index) => (
        <div key={index.id}>
          <CardMenu img={index.img} desc={index.desc} descHover={index.descHover} />
        </div>
      ))}
    </div>
  );
};

export default DataMenu;
