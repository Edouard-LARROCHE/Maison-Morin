import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DataItem from './DataItem';

const data = [
  {
    id: 1,
    mainTitle: 'TRAITEUR',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 1 }, { titleTraiteurViande: 'VIANDE' }, { titleTraiteurPoisson: 'POISSON' }],
  },
  {
    id: 2,
    mainTitle: 'PATISSERIES',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 2 }, { titlePatisserieCake: 'CAKES' }, { titlePatisserieFruit: 'FRUITS' }, { titlePatisserieMacaron: 'MACARONS' }],
  },
  {
    id: 3,
    mainTitle: 'CAVE À VIN',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 3 }, { titleCaveRouge: 'ROUGE' }, { titleCaveBlanc: 'BLANC' }, { titleCaveRosé: 'ROSÉ' }, { titleCaveBulle: 'BULLES' }],
  },
  {
    id: 4,
    mainTitle: 'COCKTAILS',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 4 }, { titleCocktails: 'COCKTAILS' }],
  },
  {
    id: 5,
    mainTitle: (
      <Link to="/produits-d'exception" style={{ color: '#fff' }}>
        PRODUITS D'EXCEPTION
      </Link>
    ),
    arrow: <KeyboardArrowDownIcon style={{ opacity: 0 }} />,
    subItem: [{ id: 5 }],
  },
];

const MenuDrop = () => {
  return (
    <div className='header-nav'>
      <ul>
        {data.map((item) => {
          return <DataItem key={item.id} navData={item} arrow={item.arrow} />;
        })}
      </ul>
    </div>
  );
};

export default MenuDrop;
