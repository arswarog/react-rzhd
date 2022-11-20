import { IStation } from './types';

export const SET_STATIONS = 'SET_STATIONS';

export function setStations(stations: IStation[]) {
    return {
        type: SET_STATIONS,
        payload: stations,
    };
}
