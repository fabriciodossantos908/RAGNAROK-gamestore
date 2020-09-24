import express, { json } from 'express'
import GamesController from './controllers/gamesController';

const routes = express.Router();

const gamesController = new GamesController();

routes.get('/games', gamesController.index);
routes.post('/games', gamesController.create);


export default routes;  