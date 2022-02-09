import React from 'react';

const data = {
  nav: [
      {
          mainTitle: 'morin1',
          subItem: [{ title: 'item1' }, { title: 'item2' }],
      },
      {
          mainTitle: 'morin2',
          subItem: [{ title: 'item1' }, { title: 'item2' }],
      },
      {
          mainTitle: 'morin3',
          subItem: [{ title: 'item1' }, { title: 'item2' }],
      },
      {
          mainTitle: 'morin4',
          subItem: [{ title: 'item1' }, { title: 'item2' }],
      },
  ],
};

const DataItem = () => {
  return (
    <div className='header-nav'>
      <div className='content-nav'>
        <ul>
          {data.nav.map((item) => {
            return;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DataItem;
