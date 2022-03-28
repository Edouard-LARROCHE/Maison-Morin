import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const ButtonSwitchMobile = () => {
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
    <div className={`btn ${darkMode ? 'btn-mobile-dark' : 'btn-mobile-light'}`} onClick={onClick}>
      {darkMode ? (
        <>
          <span>Version contrastée</span>
          <Brightness4Icon style={{ cursor: 'pointer', fontSize: '1.2rem', transform: 'translate(10px, 5px)', marginRight: '0.5rem' }} />
        </>
      ) : (
        <>
          <span>Version standard</span>
          <Brightness5Icon style={{ cursor: 'pointer', fontSize: '1.2rem', transform: 'translate(10px, 5px)', marginRight: '0.5rem' }} />
        </>
      )}
    </div>
  );
};

export default ButtonSwitchMobile;
