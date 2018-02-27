import React, { Component } from "react";

class GoogleMap extends Component {
    // automaticly after this component rendered to the screen
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // React allow to reference to HTML element that render to the page by ref
        // access by this.refs.map
        return <div ref="map" />;

    }
}

export default GoogleMap;