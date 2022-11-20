import { mkdirSync, readFile, writeFile } from 'fs';
import path from 'path';

import { IUser } from '../types/users';

const dataFilename = path.resolve(__dirname, '../../../data/users.json');

let users: IUser[] = [];

function readUsers() {
    readFile(dataFilename, (err, data) => {
        if (data) {
            try {
                users = JSON.parse(data.toString());
            } catch (_) {}
        }
    });
}

function writeUsers() {
    writeFile(dataFilename, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Wrote users.json');
        }
    });
}

function generateNewID() {
    return Math.max(0, ...users.map((item) => item.id)) + 1;
}

export function refreshData() {
    mkdirSync(path.dirname(dataFilename), { recursive: true });
    readUsers();
}

export function add(data: Omit<IUser, 'id'>): IUser {
    const record = {
        ...data,
        id: generateNewID(),
    };

    users.push(record);

    writeUsers();

    return record;
}

export function getAll(): IUser[] {
    return users;
}
