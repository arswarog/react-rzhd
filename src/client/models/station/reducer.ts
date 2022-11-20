import { AnyAction } from 'redux';

import { SET_STATIONS } from './actions';
import { IStation } from './types';

export function stationsReducer(state: IStation[] | undefined, action: AnyAction): IStation[] {
    if (!state) {
        state = [];
    }

    switch (action.type) {
        case SET_STATIONS:
            return action.payload as IStation[];
    }

    return state;
}
