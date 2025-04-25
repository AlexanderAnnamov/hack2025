import {Place} from "../models/map/Place.ts";
import dodo from '../assets/dodo.svg';
import event from '../assets/event-icon.svg';

export const places: Place[] = [
    {
        id: '0000000',
        description: 'эта крута',
        name: 'Dodo Pizza',
        label: 'Dodo Pizza',
        iconUrl: dodo,
        imageUrl: 'https://img03.rl0.ru/afisha/1894x1000i/www.afisha.ru/uploads/images/c/b9/cb9ef6276b7341b681caab1b9cb1c81f.jpg',
        coords: [60.603736, 56.856311],
        rating: 3.0
    },
    {
        id: '000001',
        description: 'Хакатон такой вот крутой',
        name: 'ИТы герой',
        label: 'ИТы герой',
        iconUrl: event,
        imageUrl: 'https://img03.rl0.ru/afisha/1894x1000i/www.afisha.ru/uploads/images/c/b9/cb9ef6276b7341b681caab1b9cb1c81f.jpg',
        coords: [60.590549, 56.844352],
        rating: 5.0
    }
]