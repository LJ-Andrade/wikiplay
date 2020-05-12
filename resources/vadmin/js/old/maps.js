console.log("Maps JS Mounted");

import L from 'leaflet'
import { GeoSearchControl, EsriProvider } from 'leaflet-geosearch'
import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/dist/style.css'
import 'leaflet-geosearch/assets/css/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '../../vendor/leaflet/marker-icon-2x.png',
  iconUrl: '../../vendor/leaflet/marker-icon.png',
  shadowUrl: '../../vendor/leaflet/marker-shadow.png'
});

const provider = new EsriProvider();

const searchControl = new GeoSearchControl({
    provider: provider,                                 // required
    showMarker: true,                                   // optional: true|false  - default true
    showPopup: true,                                    // optional: true|false  - default false
    marker: {                                           // optional: L.Marker    - default L.Icon.Default
        icon: new L.Icon.Default(),
        draggable: false,
    },
    popupFormat: ({ query, result }) => result.label,   // optional: function    - default returns result label
    //maxMarkers: 1,                                    // optional: number      - default 1
    retainZoomLevel: false,                             // optional: true|false  - default false
    animateZoom: true,                                  // optional: true|false  - default true
    autoClose: true,                                    // optional: true|false  - default false
    searchLabel: 'Ingrese dirección...',                // optional: string      - default 'Enter address'
    keepResult: true
});

const map = L.map('map', {
    //center: [43.64701, -79.39425], //comment out one of the centers
    // y: -34.649456982514856
    // x: -58.488082318483464
    center: [-34.649456982514856, -58.488082318483464],
    // center: [40, -80],
    zoom: 15,
    iconUrl: 'test.jpg'
});

map.addControl(searchControl);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">EsriProvider</a> contributors'
}).addTo(map);

map.on('geosearch/showlocation', function(results) {    
    // latLng= new L.LatLng(results[0].center.lat, results[0].center.lng);
    // marker = new L.Marker (latLng);
    // map.addlayer(marker);
    console.log(results);
    console.log(results.location.x);
    console.log(results.location.y);
    // place coords on div

});
