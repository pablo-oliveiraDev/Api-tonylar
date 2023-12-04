import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';


export class randomGetSellerController {
    async handle(request: Request, response: Response) {
        const sellers = await prismaClient.seller.findMany({});
        const random :number = Math.floor(Math.random() * sellers.length);
        const getRandomSeller = sellers.filter((item, index) => {
            return index === random;
        })
        return response.status(200).json(getRandomSeller);
    }
}