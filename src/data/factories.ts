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
