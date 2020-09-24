import { Request, Response } from "express";
import db from "../database/connection";


export default class GenresController {

    async create(request: Request, response: Response) {

        const {
            name
        } = request.body;

        const trx = await db.transaction();

        try {
            await trx.table('genres').insert({
                name
            })

            // try to efetuate all the latest steps
            await trx.commit();

            // response to efetuated insert
            return response.status(201).send()


        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new game'
            })
        }
    }
}