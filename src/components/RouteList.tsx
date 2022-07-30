import { allStations } from '../data/stations';
import { IRoute, RouteID } from '../models/route';
import { StationID } from '../models/station';
import './RouteList.css';

interface IProps {
    loading: boolean;
    routes: IRoute[];
    source: StationID;
    destination: StationID;

    onSelect?(routeId: RouteID): void;
}

export function RouteList(props: IProps) {
    const src = allStations[props.source].name;
    const dest = allStations[props.destination].name;

    if (props.loading) {
        return (
            <div className="route-list">
                <div className="route">
                    <span className="center">Loading...</span>
                </div>
            </div>
        );
    } else if (!props.routes.length) {
        return (
            <div className="route-list">
                <div className="route">
                    <span className="center">No routs found</span>
                </div>
            </div>
        );
    } else
        return (
            <div className="route-list">
                {props.routes.map((route: IRoute) => {
                    return (
                        <div className="route">
                            <div className="route__path">
                                <span className="route__src">{src}</span>
                                <span className="route__dash">-</span>
                                <span className="route__dst">{dest}</span>

                                {/* <span className="route__src--grey">из {allStations[+route.stations[1]].name}</span> */}
                            </div>
                            <span className="route__stop-number">{route.stations.length} stops</span>
                        </div>
                    );
                })}
            </div>
        );
}
