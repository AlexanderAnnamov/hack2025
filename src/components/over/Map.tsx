import React, {useEffect} from 'react';
import { load } from '@2gis/mapgl';

const MapWrapper = React.memo(() => {
    return <div id="map-wrapper" style={{ width: '100%', height: '90vh' }}/>
}, () => true)

export const Map: React.FC = () => {
    useEffect(() => {
        let map: any;
        let isMounted = true;

        load().then((mapglAPI) => {
            if (!isMounted) return;
            map = new mapglAPI.Map('map-wrapper', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: '',
            });
        });

        return () => {
            isMounted = false;
            if (map) map.destroy();
        };
    }, []);


    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper/>
        </div>
    );
};