import { IRoute, RouteID } from '../models/route';
import { IStation, StationID } from '../models/station/types';

let _stationIds = 1;

/**
 * Создание станции
 * @param {string} name Передаем название станции
 * @returns Station
 */
export function createStation(name: string): IStation {
    if (!name) throw new Error('Станция не может иметь пустое название');

    return {
        id: _stationIds++ as StationID,
        name,
    };
}

let _routeIds = 1;

/**
 * Создание марштура
 */
export function createRoute(name: string, stations: number[]): IRoute {
    // проверка данных маршрута
    return {
        id: _routeIds++ as RouteID,
        name,
        stations: [...stations],
    };
}
