import { useState } from 'react';

import { RouteList } from './components/RouteList';
import { RouteSearch } from './components/RouteSearch';
import { allRoutes } from './data/routes';
import { allStations } from './data/stations';
import { StationID } from './models/station';

/**
 * Страница поиска и выбора маршрута
 */
export function RouteSearchPage() {
    const [loading, setLoading] = useState(false);
    const [sourceStation, setSourceStation] = useState(0 as StationID);
    const [destinationStation, setDestinationStation] = useState(0 as StationID);

    function onChangeStations(sourceId: StationID, destinationId: StationID) {
        setSourceStation(sourceId);
        setDestinationStation(destinationId);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, Math.random() * 1000);
    }

    return (
        <div>
            <RouteSearch
                stations={allStations}
                onSubmit={onChangeStations}
            />
            <RouteList
                loading={loading}
                routes={allRoutes}
                source={sourceStation}
                destination={destinationStation}
            />
        </div>
    );
}
