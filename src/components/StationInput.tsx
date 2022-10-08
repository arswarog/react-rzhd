import './StationInput.css';

import { useState } from 'react';

import { IStation, noStation, StationID } from '../models/station';

export enum StationInputType {
    src = 'src',
    dst = 'dst',
}

interface IProps {
    type: StationInputType;
    stations: IStation[];
    onChange?: (stationId: StationID) => void;
}

export function StationInput({ type, stations, onChange }: IProps) {
    const [value, setValue] = useState('');
    const [id, setId] = useState<StationID>(noStation);
    const [showSuggest, setSuggest] = useState(false);
    let preventBlur = false;

    function handleSelect(station: IStation) {
        console.log(station);
        setValue(station.name);
        setId(station.id);
        onChange?.(station.id);
        setSuggest(false);
        preventBlur = false;
    }

    function handleChange(e: any) {
        let value = e.target.value;

        setValue(value);

        value = value.trim().toLowerCase();

        const station = stations.find((item) => item.name.toLowerCase() === value);

        const id = station?.id || noStation;

        setId(id);
        onChange?.(id);
    }

    function handleClear() {
        setValue('');
        setId(noStation);
        onChange?.(noStation);
    }

    function handleFocus() {
        setSuggest(true);
    }

    function handleBlur() {
        if (!preventBlur) setSuggest(false);
    }

    return (
        <div className="route-search__input-box">
            {value} {id}
            <input
                name={type}
                value={value}
                autoComplete="off"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <button onClick={handleClear}>X</button>
            <ul
                id={`route-search-${type}-suggest`}
                className={'route-search__suggest ' + (showSuggest ? 'route-search__suggest_open' : '')}
            >
                {stations.map((item) => (
                    <li
                        key={item.id}
                        className="route-search__suggest-item"
                        onMouseDown={() => handleSelect(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
