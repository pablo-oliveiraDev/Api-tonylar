import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class FindAllSellers {
    async handle(request: Request, response: Response) {
        const sellers = await prismaClient.seller.findMany({
        });
        return response.status(200).json(sellers);
    };
};