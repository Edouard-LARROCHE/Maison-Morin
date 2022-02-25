import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DirectionsIcon from '@material-ui/icons/Directions';
import GoogleMapReact from 'google-map-react';

const Logo = () => <LocationOnIcon style={{ color: '#ddb355' }} />;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.44,
      lng: 2.6,
    },
    zoom: 2,
  };

  render() {
    return (
      <div className='map'>
        <div className='google-map' style={{ height: '80vh' }}>
          <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <Logo lat={48.44551} lng={2.60484} />
          </GoogleMapReact>
        </div>
        <div className='location-shop'>
          <div className='top-shop'>
            <div className='location-adress'>
              <img src='/logo/V.png' alt='V' style={{ width: '3rem' }} />
              <div className='adress'>
                <h2>Barbizon - Grande rue</h2>
                <p>La boutique Maison Morin</p>
              </div>
            </div>
            <div className='info-shop'>
              <p>57 Grande Rue</p>
              <p>01.60.66.40.26</p>
              <p>Horaires: de 09h00 à 13h00</p>
              <p>de 15h00 à 19h30</p>
            </div>
            <div className='go-to-shop'>
              <ul>
                <li style={{ cursor: 'pointer' }}>Voir la fiche</li>
                <a
                  href='https://www.google.fr/maps/dir//Maison+Morin,+57+Grande+Rue,+77630+Barbizon/@48.445493,2.602645,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e5f2015d8671f1:0x2bb01a1211d0b1ad!2m2!1d2.6048435!2d48.4455059'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <li>
                    Itinéraire <DirectionsIcon />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className='content-shop'></div>
        </div>
      </div>
    );
  }
}

export default Map;
