import { IRoute } from '../models/route';
import { IStation } from '../models/station';

let _stationIds = 1;

/**
 * Создание станции
 * @param {string} name Передаем название станции
 * @returns Station
 */
export function createStation(name: string): IStation {
    if (!name) throw new Error('Станция не может иметь пустое название');

    return {
        id: _stationIds++,
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
        id: _routeIds++,
        name,
        stations: [...stations],
    };
}
