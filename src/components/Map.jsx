import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}
                      style={{height: '100%', width: '100%'}}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};


export default MapComponent;