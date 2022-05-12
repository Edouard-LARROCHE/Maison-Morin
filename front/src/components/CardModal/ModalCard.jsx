import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from './Card';

const ModalCard = ({ isShowing, hide }) => {
  const [listData, setListData] = useState([]);
  const cardId = useSelector((state) => state.cardReducer);

  useEffect(() => {
    let urls = [
      '/picture/cave/vins/',
      '/picture/traiteur/viande/',
      '/picture/traiteur/poisson/',
      '/picture/traiteur/charcuterie/',
      '/picture/patisserie/macaron/',
      '/picture/patisserie/patisseries/',
      '/picture/cocktails/',
      '/picture/produitsExcep/',
    ];

    for (let i = 0; i < cardId.length; i++) {
      Promise.all(urls.map((url) => axios.get(url + cardId[i]))).then(
        ([
          { data: vins },
          { data: viandes },
          { data: poisson },
          { data: charcuterie },
          { data: macaron },
          { data: patisserie },
          { data: cocktails },
          { data: produitsexcep },
        ]) => {
          setListData((listData) => [...listData, vins || viandes || poisson || charcuterie || macaron || patisserie || cocktails || produitsexcep]);
        },
      );
    }
  }, [cardId]);

  return (
    <div>
      <div>{isShowing ? listData.map((gallery) => <Card gallery={gallery} hide={hide} />) : null}</div>
    </div>
  );
};

export default ModalCard;
