import { IStation } from '../models/station/types';

import { createStation } from './factories';

export const allStations: IStation[] = [
    createStation('Краснодар'),
    createStation('Кисловодск'),
    createStation('Майкоп'),
    createStation('Адлер'),
    createStation('Ростов-на-Дону'),
    createStation('Ульяновск'),
    createStation('Владивосток'),
];
