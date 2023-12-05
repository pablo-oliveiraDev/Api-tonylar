import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class FindActiveSellerController {
    async handle(request: Request, response: Response) {

        const seller = await prismaClient.seller.findMany({
            where: {
                active: true,
            },
        });
        return response.status(201).json(seller);
    }
}