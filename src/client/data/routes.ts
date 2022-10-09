import { IRoute } from '../models/route';

import { createRoute } from './factories';

export const allRoutes: IRoute[] = [
    createRoute('111', [1, 3, 5, 7]),
    createRoute('112', [7, 5, 3, 1]),
    createRoute('207', [5, 1, 3]),
    createRoute('208', [3, 1, 5]),
];
