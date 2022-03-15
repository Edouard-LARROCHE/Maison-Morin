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
        <li>
          {navData.mainTitle}
          <Link to='/cocktails'>
            <div className='navitem-woa'>{navData.mainTitleWOA1}</div>
          </Link>
          <Link to="/produits-d'exception">
            <div className='navitem-woa'>{navData.mainTitleWOA2}</div>
          </Link>
        </li>
        <li>{arrow}</li>
      </div>
      {showDropdown && (
        <div className='dropdown' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          {navData.subItem.map((item) => (
            <div key={item.id}>
              <ul>
                <li>
                  <Link to='/traiteur-viandes'>
                    <div className='items'>{item.titleTraiteurViande}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/traiteur-poissons'>
                    <div className='items'>{item.titleTraiteurPoisson}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/patisseries-cakes'>
                    <div className='items'>{item.titlePatisserieCake}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/patisseries-macarons'>
                    <div className='items'>{item.titlePatisserieMacaron}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/cave-rouge'>
                    <div className='items'>{item.titleCaveRouge}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/cave-blanc'>
                    <div className='items'>{item.titleCaveBlanc}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/cave-rose'>
                    <div className='items'>{item.titleCaveRosé}</div>
                  </Link>
                </li>
                <li>
                  <Link to='/cave-bulle'>
                    <div className='items'>{item.titleCaveBulle}</div>
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
