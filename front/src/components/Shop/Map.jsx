import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Logo = () => <img src='/assets/morin_solo_doree.png' alt='morin-doree' width='64px' height='64px' />;

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
      <div style={{ height: '70vh', width: '40%' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <Logo lat={48.44551} lng={2.60484} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
