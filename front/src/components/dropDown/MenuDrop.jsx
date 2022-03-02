import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DataItem from './DataItem';

const data = [
  {
    id: 1,
    mainTitle: 'TRAITEUR',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 1 }, { titleTraiteur: 'VIANDE' }, { titleTraiteur: 'POISSON' }],
  },
  {
    id: 2,
    mainTitle: 'PATISSERIES',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 2 }, { titlePatisserie: 'CAKES' }, { titlePatisserie: 'FRUITS' }],
  },
  {
    id: 3,
    mainTitle: 'CAVE À VIN',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 3 }, { titleCave: 'DON PADRE' }, { titleCave: 'DON MADRE' }],
  },
  {
    id: 4,
    mainTitle: 'DELICES',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ id: 4 }, { titleDelice: 'CHOCO' }, { titleDelice: 'TRUFFES' }],
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
