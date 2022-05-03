import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const ButtonSwitch = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' });
    } else {
      theme.dispatch({ type: 'DARKMODE' });
    }
  };
  return (
    <div className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`} onClick={onClick}>
      {darkMode ? (
        <div style={{ width: '170px' }}>
          <Brightness4Icon style={{ cursor: 'pointer', fontSize: '1.2rem', marginRight: '1rem' }} />
          <span style={{ color: '#fff' }}>Version contrastée</span>
        </div>
      ) : (
        <div style={{ width: '170px' }}>
          <Brightness5Icon style={{ cursor: 'pointer', fontSize: '1.2rem', marginRight: '1rem' }} />
          <span style={{ color: '#fff' }}>Version standard</span>
        </div>
      )}
    </div>
  );
};

export default ButtonSwitch;
