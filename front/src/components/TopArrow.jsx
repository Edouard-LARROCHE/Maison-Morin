import React, { useEffect, useState } from 'react';
import KeyboardArrowIcon from '@material-ui/icons/KeyboardArrowUp';

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className='scroll-top-resp'>
          <KeyboardArrowIcon style={{ fontSize: '2.5rem', color: '#ddb355' }} onClick={scrollTop} />
        </div>
      )}
    </>
  );
};

export default TopArrow;
