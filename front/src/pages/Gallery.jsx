import React, { useEffect, useState } from 'react';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import HeadBand from '../components/HeadBand';
import Traiteur from '../components/gallery/Traiteur';
import Transition from './Transition';

const Gallery = () => {
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const trans = () => {
      setTransition(true);
    };
    setTimeout(() => {
      trans();
      setTransition(false);
    }, 60000);
  }, []);

  return (
    <>
      {transition ? (
        <div>
          <Transition />
        </div>
      ) : (
        <div>
          <NavBar />
          <HeadBand />
          <Traiteur />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Gallery;
