import * as express from 'express';
import UserRouter from './UserRouter';
import ProjectsRouter from './ProjectsRouter';
import { IServer } from '../interfaces/ServerInterface';

import Auth from "../services/JwtToken";

export default class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server: IServer): void {
        const router: express.Router = express.Router();
        server.app.use('/', router);
        server.app.use('/api/verify', Auth.verifyRequestAuth);
        server.app.use('/api/projects', new ProjectsRouter().router);
    }
}
