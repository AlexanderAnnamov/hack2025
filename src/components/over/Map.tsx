import React, {useEffect, useState} from 'react';
import { load } from '@2gis/mapgl';
import { Directions  } from '@2gis/mapgl-directions';
import { environment } from '../../environments/environment.ts';
import {places} from "../../mocks/places.ts";
import {Place} from "../../models/map/Place.ts";
import {PlaceDialog} from "../lite/PlaceDialog.tsx";

const MapWrapper = React.memo(() => {
    return <div id="map-wrapper" style={{ width: '100%', height: '90vh' }} />;
}, () => true);

export const Map: React.FC = () => {
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleOpen = (place: Place) => {
        setSelectedPlace(place);
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
        setSelectedPlace(null);
    };

    useEffect(() => {
        let directions: any;
        let map: any;
        let isMounted = true;

        load().then((mapglAPI) => {
            if (!isMounted) return;

            map = new mapglAPI.Map('map-wrapper', {
                center: [60.590549, 56.844352],
                zoom: 16,
                key: environment.apiKey,
            });

            directions = new Directions(map, {
                directionsApiKey: environment.apiKey,
            });

            const firstPoint = [60.590549, 56.844352];
            const secondPoint = [68.590549, 59.844352];

            directions.pedestrianRoute({
                points: [firstPoint, secondPoint],
            });

            for (const place of places) {
                const marker = new mapglAPI.Marker(map, {
                    coordinates: place.coords,
                    icon: place.iconUrl,
                    label: {
                        text: place.label,
                        offset: [0, 25],
                        relativeAnchor: [0.5, 0],
                    },
                    userData: {
                        id: place.id,
                        name: place.name,
                        imageUrl: place.imageUrl,
                        description: place.description,
                        rating: place.rating
                    }
                });

                marker.on('click', (e) => {
                    handleOpen(e.targetData.userData)
                })
            }
        });

        return () => {
            isMounted = false;
            if (map) map.destroy();
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
            <PlaceDialog open={isDialogOpen} onClose={handleClose} place={selectedPlace}/>
        </div>
    );
};
