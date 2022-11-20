import { composeWithDevTools } from '@redux-devtools/extension';
import { AnyAction, applyMiddleware, combineReducers, createStore, Middleware } from 'redux';

import { createStation } from './data/factories';
import { setStations } from './models/station/actions';
import { stationsReducer } from './models/station/reducer';
import { changeUserName, CHANGE_USER_NAME } from './models/user/actions';
import { userReducer } from './models/user/reducer';

const logMiddleware: Middleware = () => (next) => (action: AnyAction) => {
    console.log(action);
    next(action);
};

const apiMiddleware: Middleware =
    ({ dispatch }) =>
    (next) =>
    (action: AnyAction) => {
        if (action.type !== CHANGE_USER_NAME) {
            return next(action);
        }

        fetch('/')
            .then((res) => res.text())
            .then((data) => {
                dispatch(setStations([createStation('Бабруйск-17')]));
            });

        setTimeout(() => {
            next(action);
        }, 1000);
    };

export const store = createStore(
    combineReducers({
        user: userReducer,
        stations: stationsReducer,
    }),
    composeWithDevTools(
        applyMiddleware(logMiddleware, apiMiddleware),
        // other store enhancers if any
    ),
);
