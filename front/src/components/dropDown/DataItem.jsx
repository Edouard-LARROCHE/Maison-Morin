import React, { useState } from 'react';

const DataItem = ({ navData, arrow }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleEnter() {
    setShowDropdown(true);
  }

  function handleLeave() {
    setShowDropdown(false);
  }
  return (
    <div className='down'>
      <div className='navitem'>
        <li>{navData.mainTitle}</li>
        <li className='arrow' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          {arrow}
        </li>
      </div>
      {showDropdown && (
        <div className='dropdown' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          {navData.subItem.map((item) => (
            <div className='items' key={item.title}>
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataItem;
