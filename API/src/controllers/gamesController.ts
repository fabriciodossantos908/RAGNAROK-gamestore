import { Request, Response } from "express"
import { getNameOfDeclaration } from "typescript";
import db from "../database/connection";


interface GenreItem {
    genre_id: Number;
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
            await trx('games').insert({
                name,
                image,
                genres,
                description,
                release_date,
                developer,
                publisher,
                player,
                platforms,
                metacritic,
                price
            })

            // try to efetuate all the latest steps
            await trx.commit();

            // response to efetuated insert
            return response.status(201).send()

        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new game',
                log: err
            })
        }

    }

}