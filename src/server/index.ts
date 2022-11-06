import fs, { writeFile, readFile } from 'fs';
import path from 'path';

import express, { Request, Response, NextFunction } from 'express';

const dataFilename = path.resolve(__dirname, '../../data/users.json');

const app = express();
const port = 3001;

interface IUser {
    id: number;
    name: string;
    lastname: string;
}

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

readUsers();

function myLogger(req: Request, res: Response, next: NextFunction) {
    console.log(req.method + ' ' + req.path);

    if (req.path.startsWith('/manifest.json')) {
        res.send({});

        return;
    }

    next();
}

app.use('/static/', myLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('build'));

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.post('/api/users', (req, res) => {
    const record: IUser = {
        ...req.body,
        id: generateNewID(),
    };

    users.push(record);

    writeUsers();

    res.status(201).send(record);
});

// GET    /api/users     // вернуть всех пользователей
// GET    /api/users/1   // вернуть конкретного пользователя №1
// PUT    /api/users/1   // обновить пользователя №1
// PATCH  /api/users/1   // обновить пользователя №1
// POST   /api/users     // добавить пользователя
// DELETE /api/users/1   // удалить пользователя №1

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((item) => item.id === id);

    if (user) {
        res.send(user);

        return;
    }

    res.sendStatus(404);
});

app.put('/api/users/:id', (req, res) => {
    const id = +req.params.id;
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        res.sendStatus(404);

        return;
    }

    const record: IUser = {
        ...(req.body as IUser),
        id,
    };

    users[index] = record;

    writeUsers();

    res.send(record);
});

app.patch('/api/users/:id', (req, res) => {
    const id = +req.params.id;
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        res.sendStatus(404);

        return;
    }

    const record: IUser = {
        ...users[index],
        ...(req.body as IUser),
        id,
    };

    users[index] = record;

    writeUsers();

    res.send(record);
});

app.delete('/api/users/:id', (req, res) => {
    const id = +req.params.id;
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        res.sendStatus(404);

        return;
    }

    users.splice(index, 1);

    writeUsers();

    res.sendStatus(204);
});

app.all('*', (req, res) => {
    res.status(404).send({ error: 'not found' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
