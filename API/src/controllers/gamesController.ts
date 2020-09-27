import { Request, Response } from "express"
import db from "../database/connection";


interface GenreItem {
    genre_id: Number;
}

interface GamePlatformItem {
    platform_id: Number;
}

export default class GamesController {

    // list games
    async index(request: Request, response: Response) {
        try {
            const games = await db('games')
                .select(
                    'games.*'
                )
                .from('games')

            return response.json(games);
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while taking game data',
                log: err,
            })
        }

    }

    // create game
    async create(request: Request, response: Response) {

        const {
            name,
            genres,
            image,
            description,
            release_date,
            developer,
            publisher,
            player,
            platforms,
            metacritic,
            price
        } = request.body;

        const trx = await db.transaction();

        try {
            const games = await trx('games').insert({
                name,
                image,
                description,
                release_date,
                developer,
                publisher,
                player,
                metacritic,
                price
            })

            // Maintain the id for the creates that left
            const game_id = games[0]

            // Creating a connection between game and genre
            const gameGenre = genres.map((genreItem: GenreItem) => {
                return {
                    game_id,
                    genre_id: genreItem.genre_id
                }
            })

            await trx.table('game_genre').insert(gameGenre)


            // Creating a connection between game and platform
            const gamePlatform = platforms.map((gamePlatformItem: GamePlatformItem) => {
                return {
                    game_id,
                    platform_id: gamePlatformItem.platform_id
                }
            })

            await trx.table('game_platform').insert(gamePlatform)


            // try to efetuate all the latest steps
            await trx.commit();

            // response to efetuated insert
            return response.status(201).json({ message: 'Game created with sucess!!' }).send()

        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new game',
                log: err
            })
        }

    }

}