import React, { useEffect, useState } from 'react';
import IndexTraiteurViande from './updateViande/IndexTraiteurViande';
import axios from 'axios';

const Index = () => {
  const [viande, setViande] = useState([]);
  const [poisson, setPoisson] = useState([]);
  const [charcuterie, setCharcuterie] = useState([]);

  const allFetch = () => {
    let urls = [
      'http://localhost:5500/picture/traiteur/viande',
      'http://localhost:5500/picture/traiteur/poisson',
      'http://localhost:5500/picture/traiteur/charcuterie',
    ];

    Promise.all(urls.map((url) => axios.get(url))).then(([{ data: viande }, { data: poisson }, { data: charcuterie }]) => {
      setViande(viande);
      setPoisson(poisson);
      setCharcuterie(charcuterie);
      console.log(viande, poisson, charcuterie);
    });
  };

  useEffect(() => {
    allFetch();
  }, []);

  return (
    <div>
      <IndexTraiteurViande />
    </div>
  );
};

export default Index;
