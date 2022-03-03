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
            <div key={item.id}>
              <ul>
                <li>
                  <Link to='/traiteur-viandes'>
                    <div className='items'>{item.titleTraiteur}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/patisseries'>
                    <div className='items'>{item.titlePatisserie}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/cave'>
                    <div className='items'>{item.titleCave}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/delices'>
                    <div className='items'>{item.titleDelice}</div>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataItem;
