import React from 'react';
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
    mainTitleWOA1: 'COCKTAILS',
    arrow: <KeyboardArrowDownIcon style={{ opacity: 0 }} />,
    subItem: [{ id: 4 }],
  },
  {
    id: 5,
    mainTitleWOA2: "PRODUITS D'EXCEPTION",
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
