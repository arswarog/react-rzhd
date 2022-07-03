import './StationInput.css';

export enum StationInputType {
    src = 'src',
    dst = 'dst',
}

interface IProps {
    type: StationInputType;
    stations: string[];
}

export function StationInput({type, stations}: IProps) {
    return (
        <div className="route-search__input-box">
            <input name={type} autoComplete="off">
                <ul id={`route-search-${type}-suggest`} className="route-search__suggest route-search__suggest_open">
                    {stations.map(
                        (item) => (<li className="route-search__suggest-item">{item}</li>)
                    )}
                </ul>
            </input>
        </div>
    );
}
