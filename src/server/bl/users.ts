import * as UsersDal from '../dal/users';
import { IUser } from '../types/users';

export function addUser(data: Omit<IUser, 'id'>): IUser {
    if (data.age < 18) {
        throw new Error('Еще маленький');
    }

    return UsersDal.add(data);
}

export function getAll(): IUser[] {
    return UsersDal.getAll();
}
