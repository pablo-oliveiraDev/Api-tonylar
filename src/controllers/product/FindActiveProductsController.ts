import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
export class FindActiveProductsController {
    async handle(request: Request, response: Response) {

        const product = await prismaClient.product.findMany({
            where: {
                active: true
            },
            include: {
                productImages: true
            }
        });
        return response.status(200).json(product);
    }
}