import React from 'react';
import CardMenu from './CardMenu';

const DataMenu = () => {
  const dataMenu = [
    {
      id: 1,
      link: 'traiteur-charcuterie',
      img: '/assets/traiteur.webp',
      desc: 'TRAITEUR',
      descHover: 'TRAITEUR',
    },
    {
      id: 2,
      link: 'patisseries',
      img: '/assets/patisserie10.webp',
      desc: 'PÂTISSERIES',
      descHover: 'PÂTISSERIES',
    },
    {
      id: 3,
      link: 'patisseries-macarons',
      img: '/assets/selection-macaron2.webp',
      desc: 'MACARONS',
      descHover: 'MACARONS',
    },
    {
      id: 4,
      link: 'cave-a-vins',
      img: '/assets/Fond-vins-45.webp',
      desc: 'CAVE À VINS',
      descHover: 'CAVE À VINS',
    },
    {
      id: 5,
      link: 'cocktails',
      img: '/assets/cocktails-dinatoir.webp',
      desc: 'COCKTAILS DINATOIRE',
      descHover: 'COCKTAILS DINATOIRE',
    },
    {
      id: 6,
      link: "produits-d'exception",
      img: '/assets/prod-except.webp',
      desc: "PRODUITS D'EXCEPTION",
      descHover: "PRODUITS D'EXCEPTION",
    },
  ];

  return (
    <div className='global-card-menu'>
      {dataMenu.map((index) => (
        <div key={index.id}>
          <CardMenu img={index.img} desc={index.desc} descHover={index.descHover} link={index.link} />
        </div>
      ))}
    </div>
  );
};

export default DataMenu;
