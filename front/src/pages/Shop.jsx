import React from 'react';
import NavBar from '../components/home/NavBar';
// import Map from '../components/Shop/Map';
import HeadBand from '../components/HeadBand';
import Footer from '../components/home/Footer';
import App from '../components/formData';

const Shop = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      {/* <Map /> */}
      <App />
      <Footer />
    </div>
  );
};

export default Shop;
