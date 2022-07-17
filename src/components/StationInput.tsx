import './StationInput.css';

import { IStation } from '../models/station';

export enum StationInputType {
    src = 'src',
    dst = 'dst',
}

interface IProps {
    type: StationInputType;
    stations: IStation[];
    onChange?: (stationId: number) => void;
}

export function StationInput({ type, stations, onChange }: IProps) {
    return (
        <div className="route-search__input-box">
            <input
                name={type}
                autoComplete="off"
            />
            <ul
                id={`route-search-${type}-suggest`}
                className="route-search__suggest"
            >
                {stations.map((item) => (
                    <li className="route-search__suggest-item">{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
