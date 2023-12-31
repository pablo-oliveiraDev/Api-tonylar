import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class FindAllProductsControllers {
    async handle(request: Request, response: Response) {

        try {
            const product = await prismaClient.product.findMany({
                include: {
                    productImages: true
                }

            });

            return response.status(200).json(product);
        } catch {
            return response.status(404).json({ msg: "Error in search products" });
        };
    };
};