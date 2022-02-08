import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const DropDown = () => {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className='drop-down'>
      <div className={`dropdown`}>
        <div className='item'>
          <p>Notre cave</p>
          <KeyboardArrowDownIcon onClick={handleDrop} style={{ cursor: 'pointer' }} />
        </div>
        <div className={`dropdown-items ${drop ? 'isVisible' : 'isHidden'}`}>
          <div>Item 01</div>

          <div>Item 02</div>

          <div>Item 03</div>

          <div>Item 04</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
