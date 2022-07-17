import { IRoute } from '../models/route';

import './RouteList.css';

interface IProps {
    routes: IRoute[];
}

export const RouteList = ({ routes }: IProps) => (
    <ul
        className="route-list"
        id="route-list"
    >
        {routes.map((route) => (
            <li
                key={route.id}
                className="route-list__item"
            >
                <h4 className="route-list__title">{route.name}</h4>
                <div className="route-list__info">
                    <span className="data">
                        <span className="data__name">ID:</span>
                        <span className="data__value">{route.id}</span>
                    </span>
                </div>
            </li>
        ))}
    </ul>
);
