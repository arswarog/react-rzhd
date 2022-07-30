import './StationInput.css';
import { SyntheticEvent } from 'react';
import { IStation } from '../models/station';

interface IProps {
    stations: IStation[];
    onFoundStations?: (stations: IStation[]) => void;
}

export function StationInput({ stations, onFoundStations }: IProps) {
    function onChange(e: SyntheticEvent) {
        if (onFoundStations) {
            onFoundStations(
                stations.filter((s) =>
                    s.name.toLowerCase().includes((e.target as HTMLInputElement).value.toLowerCase()),
                ),
            );
        }
    }

    return (
        <div className="route-search__input-box">
            <input
                autoComplete="off"
                onChange={onChange}
            >
                <ul className="route-search__suggest route-search__suggest_open">
                    {stations.map((item) => (
                        <li className="route-search__suggest-item">{item.name}</li>
                    ))}
                </ul>
            </input>
        </div>
    );
}
