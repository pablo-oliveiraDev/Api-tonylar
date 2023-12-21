import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class FindAllSellers {
    async handle(request: Request, response: Response) {
        try {
            const sellers = await prismaClient.seller.findMany({
            });
            return response.status(200).json(sellers);
        }catch{
            return response.status(400).json({msg:"Error on search sellers!"});
        };
    };
};