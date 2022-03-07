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
    subItem: [{ id: 2 }, { titlePatisserieCake: 'CAKES' }, { titlePatisserieFruit: 'FRUITS' }],
  },
  {
    id: 3,
    mainTitle: 'CAVE À VIN',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 3 }, { titleCaveRouge: 'ROUGE' }, { titleCaveBlanc: 'BLANC' }, { titleCaveRosé: 'ROSÉ' }, { titleCaveBulle: 'BULLES' }],
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
