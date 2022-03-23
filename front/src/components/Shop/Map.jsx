import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DirectionsIcon from '@material-ui/icons/Directions';
import GoogleMapReact from 'google-map-react';

const Logo = () => <LocationOnIcon style={{ color: '#ddb355', position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -70%)" }} />;
const center = { lat: 48.4455116674167, lng: 2.604843033954841 };

class Map extends Component {
  static defaultProps = {
    center: { center }
  };

  render() {
    return (
      <div className='map'>
        <div className='google-map' style={{ height: '90vh' }}>
          <GoogleMapReact 
          bootstrapURLKeys={{ key: 'AIzaSyAurhxyG4RRTkNaouoap3MngT1vijy-CZs' }} 
          defaultCenter={center} 
          defaultZoom={18}
          center={center}
          >
            <Logo lat={48.4455116674167} lng={2.604843033954841} />
          </GoogleMapReact>
        </div>
        <div className='location-shop'>
          <div className='top-shop'>
            <div className='location-adress'>
              <img src='/logo/Or.png' alt='V'/>
              <div className='adress'>
                <h2>Barbizon - Grande rue</h2>
                <p>La boutique Maison Morin</p>
              </div>
            </div>
            <div className='info-shop'>
              <p>57 Grande Rue</p>
              <p>01.60.66.40.26</p>
              <p>06.09.04.59.85</p>
              <p>contact@maison-morin.com</p>
            </div>
            <div className='go-to-shop'>
              <ul>
                <Link to='/contact'>
                  <li style={{ cursor: 'pointer' }}>Contact</li>
                </Link>
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
          <div className='content-shop'>
            <img src='/assets/devanture-small.png' alt='morin-maison' />
            <div className='horaires'>
              <h3>Horaires d'ouverture :</h3>
              <ul>
                <p>Lundi : 8h30/13h00 - 15h00/19h30</p>
                <p>Mardi : Fermé</p>
                <p>Mercredi : Fermé</p>
                <p>Jeudi : 8h30/13h00 - 15h00/19h30</p>
                <p>Vendredi : 8h30/13h00 - 15h00/19h30</p>
                <p>Samedi : 8h30/13h00 - 15h00/19h30</p>
                <p>Diamnche : 8h30/13h00 - 15h00/19h30</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
