import './RouteSearch.css';

import { IStation, StationID } from '../models/station';

import { Button } from './Button';
import { StationInput, StationInputType } from './StationInput';

interface IProps {
    stations: IStation[];

    onSubmit?(sourceId: StationID, destinationId: StationID): void;
}

export function RouteSearch({ stations }: IProps) {
    return (
        <div className="RouteSearch">
            <StationInput
                type={StationInputType.src}
                stations={stations}
            />
            <div>Arrow</div>
            <StationInput
                type={StationInputType.dst}
                stations={stations}
            />
            <Button>Search</Button>
        </div>
    );
}
