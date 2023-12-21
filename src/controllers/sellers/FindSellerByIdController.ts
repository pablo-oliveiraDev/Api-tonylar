import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class FindSellerByIdController {
    async handle(request: Request, response: Response) {
        const { id,
        } = request.params;
        try {
            const seller = await prismaClient.seller.findFirst({
                where: {
                    id: id,

                }, take: 1
            });
            return response.status(201).json(seller);
        } catch {
            return response.status(404).json({ message: "Sellers is not found!" });
        };
    };
};