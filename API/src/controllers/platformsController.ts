import { Request, Response } from "express";
import db from "../database/connection";


export default class PlatformsController {

    async index(request: Request, response:Response) {

        
        try {
            const platforms = await db('platforms').select('platforms.*').from('platforms')

            return response.status(201).json(platforms)
        }catch {
            response.status(400).json({
                message: 'ops! something wrong happen meanwhile getting the platforms'
            })
        }
    }


    async create(request: Request, response: Response) {

        const {
            name,
        } = request.body;

        const trx = await db.transaction();

        try {
            await trx.table('platforms').insert({
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

    async delete(request: Request, response: Response) {
        const { id } = request.query;

        if(!id) {
            return response.status(400).json({
                message: 'parameter was missing, please check your request'
            })
        }

        const trx = await db.transaction();

        try {
            await trx.delete('platforms').from('platforms').where('id', '=', Number(id))

            return response.status(200).send()
        }catch(err) {
            response.status(400).json({
                message: "unexpect error meanwhile delete process",
                error: err
            })
        }
    }

    }