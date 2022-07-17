import './RouteSearch.css';

import { Button } from './Button';
import { StationInput, StationInputType } from './StationInput';

export function RouteSearch() {
    const stations: string[] = [];

    return (
        <div className="RouteSearch">
            <StationInput
                type={StationInputType.src}
                stations={stations}
            ></StationInput>
            <div>Arrow</div>
            <StationInput
                type={StationInputType.dst}
                stations={stations}
            ></StationInput>
            <Button>Search</Button>
        </div>
    );
}
