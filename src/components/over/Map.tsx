import React, {useEffect} from 'react';
import { load } from '@2gis/mapgl';

const MapWrapper = React.memo(() => {
    return <div id="map-wrapper" style={{ width: '100%', height: '100%' }}/>
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
                key: '543cc9a2-b714-44ec-b078-f6bde1f1e484',
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