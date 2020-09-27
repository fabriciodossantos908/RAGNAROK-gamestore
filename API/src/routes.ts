import express from 'express'
import GamesController from './controllers/gamesController';
import GenresController from './controllers/genresController';
import PlatformsController from './controllers/platformsController'

const routes = express.Router();

const gamesController = new GamesController();
const genreController = new GenresController();
const platformsController = new PlatformsController();


routes.get('/games', gamesController.index);
routes.post('/games', gamesController.create);

routes.get('/genres', genreController.index);
routes.post('/genres', genreController.create);

routes.get('/platforms', platformsController.index);
routes.post('/platforms', platformsController.create);
routes.delete('/platforms', platformsController.delete);

export default routes;  