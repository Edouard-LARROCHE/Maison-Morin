import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GoogleMapReact from 'google-map-react';

const Logo = () => <LocationOnIcon style={{ color: '#ddb355' }} />;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.44,
      lng: 2.6,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className='map'>
        <div className='google-map' style={{ height: '70vh', width: '80%' }}>
          <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <Logo lat={48.44551} lng={2.60484} />
          </GoogleMapReact>
        </div>
        <div className='location-shop'></div>
      </div>
    );
  }
}

export default Map;
