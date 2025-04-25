import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import { environment } from '../../environments/environment.ts';

const MapWrapper = React.memo(() => {
    return <div id="map-wrapper" style={{ width: '100%', height: '90vh' }} />;
}, () => true);

export const Map: React.FC = () => {
    useEffect(() => {
        let map: any;
        let marker: any;
        let isMounted = true;

        load().then((mapglAPI) => {
            if (!isMounted) return;

            // Инициализация карты
            map = new mapglAPI.Map('map-wrapper', {
                center: [60.590549, 56.844352],
                zoom: 16,
                key: environment.apiKey,
            });

            map.on('styleload', () => {
                marker = new mapglAPI.Marker(map, {
                    coordinates: [60.590549, 56.844352],
                    icon: 'https://docs.2gis.com/img/mapgl/marker.svg',
                    label: {
                        text: "ТУТ ХАКАТОН СУЧКИ!",
                        offset: [0, 25],
                        relativeAnchor: [0.5, 0],
                    }
                });
            });
        });

        return () => {
            isMounted = false;
            if (marker) marker.destroy();
            if (map) map.destroy();
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
