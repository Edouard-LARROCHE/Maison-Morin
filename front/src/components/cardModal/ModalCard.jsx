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

    Promise.all(urls.map((url) => axios.get(url + cardId))).then(
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

    console.log(cardId);
  }, [cardId]);

  return (
    <div>
      <div>{isShowing && listData.map((gallery, index) => <Card key={index} gallery={gallery} hide={hide} />)}</div>
    </div>
  );
};

export default ModalCard;
