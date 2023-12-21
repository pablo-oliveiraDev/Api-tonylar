import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class FindActiveSellerController {
    async handle(request: Request, response: Response) {

        try {
            const seller = await prismaClient.seller.findMany({
                where: {
                    active: true,
                },
            });
            return response.status(201).json(seller);
        } catch {
            return response.status(400).json({ msg: "Error on search sellers" });
        };
    };
};