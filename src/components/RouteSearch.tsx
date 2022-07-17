import './RouteSearch.css';

import { Button } from './Button';
import { InputBox } from './InputBox';
import { StationInput, StationInputType } from './StationInput';

export function RouteSearch() {
    const stations: string[] = [];

    return (
        <div className="RouteSearch">
            <InputBox>
                <StationInput
                    type={StationInputType.src}
                    stations={stations}
                ></StationInput>
            </InputBox>
            <div>Arrow</div>
            <InputBox>
                <StationInput
                    type={StationInputType.dst}
                    stations={stations}
                ></StationInput>
            </InputBox>
            <Button>Search</Button>
        </div>
    );
}
