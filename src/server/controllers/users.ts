import { Router } from 'express';

import { addUser, getAll } from '../bl/users';

export const usersController = Router();

usersController.get('/', (req, res) => {
    res.send(getAll());
});

usersController.post('/', (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.sendStatus(422);
    }

    if (!req.body.age) {
        return res.status(422).send({
            error: 'Field age is required',
        });
    }

    try {
        const result = addUser(req.body);

        res.status(201).send(result);
    } catch (e: any) {
        if ('message' in e) {
            res.status(400).send({
                error: e.message,
            });
        } else {
            res.sendStatus(500);
        }
    }
});
