import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';

import { router } from './routes/routes'
import { Db } from './models/db';

export class Server {
    constructor() {
        //connect to db
        new Db();

        //create server
        const app: express.Application = express();

        //middleware
        app.use(logger('dev'));
        app.use(cors());
        app.use(express.json());

        //routes
        app.use('/api', router);

        //run server
        const port = process.env.PORT || 3002;
        app.listen(port);
        console.log("server running on " + port);
    }
}

new Server();