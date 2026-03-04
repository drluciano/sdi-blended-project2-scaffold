import {createControlComponent} from '@react-leaflet/core';
import {useMap} from 'react-leaflet';
import {useEffect} from 'react';

const GeomanLayer = () => {
    const map = useMap();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('drawnLayers') || '[]');

        saved.forEach(feature => {
            const layer = L.geoJSON(feature).getLayers()[0];
            layer._savedId = feature._savedId;
            layer.addTo(map);
        });

        const handleCreate = ({layer}) => {
            const id = crypto.randomUUID();
            layer._savedId = id;
            const feature = {...layer.toGeoJSON(), _savedId: id};
            const existing = JSON.parse(localStorage.getItem('drawnLayers') || '[]');
            existing.push(feature);
            localStorage.setItem('drawnLayers', JSON.stringify(existing));
        };

        const handleRemove = ({layer}) => {
            const existing = JSON.parse(localStorage.getItem('drawnLayers') || '[]');
            const updated = existing.filter(f => f._savedId !== layer._savedId);
            localStorage.setItem('drawnLayers', JSON.stringify(updated));
        };

        map.on('pm:create', handleCreate);
        map.on('pm:remove', handleRemove);

        return () => {
            map.off('pm:create', handleCreate);
            map.off('pm:remove', handleRemove);
        };
    }, [map]);

    const Geoman = L.Control.extend({
        onAdd(map) {
            map.pm.addControls(this.options);
            return L.DomUtil.create('div');
        },
    });

    const GeomanControl = createControlComponent((props) => new Geoman(props));

    return (
        <>
            <GeomanControl position="topleft" drawCircle={false}/>
        </>
    );
};

export default GeomanLayer;