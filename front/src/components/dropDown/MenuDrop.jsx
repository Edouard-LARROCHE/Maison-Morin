import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DataItem from './DataItem';

const data = [
  {
    mainTitle: 'morin1',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ title: 'item1' }, { title: 'item2' }],
  },
  {
    mainTitle: 'morin2',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ title: 'item3' }, { title: 'item4' }],
  },
  {
    mainTitle: 'morin3',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ title: 'item5' }, { title: 'item6' }],
  },
  {
    mainTitle: 'morin4',
    arrow: <KeyboardArrowDownIcon style={{ size: 'small' }} />,
    subItem: [{ title: 'item7' }, { title: 'item8' }],
  },
];

const MenuDrop = () => {
  return (
    <div className='header-nav'>
      <ul>
        {data.map((item) => {
          return <DataItem key={item.mainTitle} navData={item} arrow={item.arrow} />;
        })}
      </ul>
    </div>
  );
};

export default MenuDrop;
