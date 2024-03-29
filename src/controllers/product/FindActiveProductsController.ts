import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
export class FindActiveProductsController {
    async handle(request: Request, response: Response) {

        try {
            const product = await prismaClient.product.findMany({
                where: {
                    active: true,
                },
                include:{
                    productImages:true
                },
            });
            
            return response.status(201).json(product);
        } catch {
            return response.status(500).json({ msg: "Product as not found!Please try again!" });
        };
    };
};