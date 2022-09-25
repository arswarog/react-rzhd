import './RouteSearch.css';

import { useState } from 'react';

import { IStation, StationID } from '../models/station';

import { Button } from './Button';
import { StationInput, StationInputType } from './StationInput';

interface IProps {
    stations: IStation[];

    onSubmit?(sourceId: StationID, destinationId: StationID): void;
}

export function RouteSearch({ stations, onSubmit }: IProps) {
    console.log('render RouteSearch');

    const [sourceId, setSourceId] = useState<StationID>('' as any);
    const [destinationId, setDestId] = useState<StationID>('' as any);

    function handleChangeSourceId(id: StationID) {
        setSourceId(id);
    }

    function handleChangeDestId(id: StationID) {
        setDestId(id);
    }

    function handleSubmit() {
        onSubmit?.(sourceId, destinationId);
    }

    return (
        <div className="RouteSearch">
            <StationInput
                type={StationInputType.src}
                stations={stations}
                onChange={handleChangeSourceId}
            />
            <div>Arrow</div>
            <StationInput
                type={StationInputType.dst}
                stations={stations}
                onChange={handleChangeDestId}
            />
            <Button onClick={handleSubmit}>Search</Button>
        </div>
    );
}
