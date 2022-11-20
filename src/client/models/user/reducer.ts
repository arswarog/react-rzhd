import { AnyAction } from 'redux';

import { CHANGE_USER_NAME } from './actions';
import { IUser } from './types';

export function userReducer(state: IUser | undefined, action: AnyAction): IUser {
    if (!state) {
        state = {
            id: 0,
            name: '',
            avatar: '',
        };
    }

    switch (action.type) {
        case CHANGE_USER_NAME:
            return {
                ...state,
                name: action.payload,
            };
    }

    return state;
}
