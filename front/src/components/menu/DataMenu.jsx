import React from 'react';
import CardMenu from './CardMenu';

const DataMenu = () => {
  const dataMenu = [
    {
      id: 1,
      img: '/assets/traiteur.png',
      desc: 'TRAITEUR',
    },
    {
      id: 2,
      img: '/assets/patisserie10.jpeg',
      desc: 'PÂTISSERIES',
    },
    {
      id: 3,
      img: '/assets/selection-macaron2.jpeg',
      desc: 'MACARONS',
    },
    {
      id: 4,
      img: '/assets/Fond-vins-45.png',
      desc: 'CAVE À VINS',
    },
    {
      id: 5,
      img: '/assets/cocktails-dinatoir.jpeg',
      desc: 'COCKTAILS DINATOIRE',
    },
    {
      id: 6,
      img: '/assets/prod-except.jpeg',
      desc: "PRODUITS D'EXCEPTION",
    },
  ];

  return (
    <div>
      {dataMenu.map((index) => (
        <div key={index}>
          <CardMenu img={index.img} desc={index.desc} />
        </div>
      ))}
    </div>
  );
};

export default DataMenu;
