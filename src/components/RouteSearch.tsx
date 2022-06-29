import { StationInput, StationInputType } from './StationInput';

export function RouteSearch() {
    return (
        <div className="RouteSearch">
            <StationInput type={StationInputType.from}></StationInput>
            <div>Arrow</div>
            <StationInput type={StationInputType.to}></StationInput>
            <div>Button</div>
        </div>
    );
}
