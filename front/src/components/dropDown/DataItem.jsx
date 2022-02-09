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
      <li className='navitem' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {navData.mainTitle} {arrow}
      </li>
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
