import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3001;

const users = [
    {
        id: 1,
        name: 'Ivan',
    },
    {
        id: 2,
        name: 'Oleg',
    },
];

function myLogger(req: Request, res: Response, next: NextFunction) {
    console.log(req.method + ' ' + req.path);

    if (req.path.startsWith('/manifest.json')) {
        res.send({});

        return;
    }

    next();
}

app.use('/static/', myLogger);

app.use(express.static('build'));

app.get('/api', (req, res) => {
    res.send(req.query);
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((item) => item.id === id);

    if (user) {
        res.send(user);

        return;
    }

    res.sendStatus(404);
});

app.all('*', (req, res) => {
    res.status(404).send({ error: 'not found' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
