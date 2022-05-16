import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../actions/card.actions';

const Card = ({ hide, gallery }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCard(gallery._id));
  };

  return (
    <div className='card-modal-overlay'>
      <div className='card-modal-wrapper'>
        <div className='card-modal'>
          <div className='card-modal-left'>
            <img src={gallery.pictureUrl} alt='Maison-Morin' />
          </div>
          <div className='card-modal-right'>
            <div className='card-right-header'>
              <h1> {gallery.name} </h1>
              <CloseIcon
                onClick={() => {
                  hide();
                  remove();
                }}
                style={{ cursor: 'pointer', color: '#012f6b' }}
              />
            </div>
            <div className='card-right-content'>
              <div className='point-info'>
                <p> {gallery.country} </p>
                <span>&#8228;</span>
                <p> {gallery.styleOfWine} </p>
                <span>&#8228;</span>
                <p> {gallery.winery} </p>
                <span>&#8228;</span>
                <p> {gallery.grapeVarieties} </p>
              </div>
              <h3> {gallery.desc} </h3>
              <div className='list-card'>
                <h2> INFORMATIONS SUR LE VIN : </h2>
                <ul>
                  <p>Domaine viticole : {gallery.winery} </p>
                  <p>Cépages : {gallery.grapeVarieties} </p>
                  <p>Région : {gallery.region} </p>
                  <p>Style de vin : {gallery.styleOfWine} </p>
                  <p>Teneur en alcool : {gallery.alcoholContent}% </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
