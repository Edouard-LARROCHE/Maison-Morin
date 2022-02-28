import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className='navitem' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <li>{navData.mainTitle}</li>
        <li>{arrow}</li>
      </div>
      {showDropdown && (
        <div className='dropdown' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          {navData.subItem.map((item) => (
            <Link to='/traiteur' key={item.title}>
              <div className='items'>{item.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataItem;
