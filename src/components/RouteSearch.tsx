import './RouteSearch.css';

import { Button } from './Button';
import { StationInput, StationInputType } from './StationInput';

export function RouteSearch() {
    return (
        <div className="RouteSearch">
            <StationInput type={StationInputType.from}></StationInput>
            <div>Arrow</div>
            <StationInput type={StationInputType.to}></StationInput>
            <Button>Search</Button>
        </div>
    );
}
