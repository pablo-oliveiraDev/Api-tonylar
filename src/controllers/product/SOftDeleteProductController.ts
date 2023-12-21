import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';

interface productBody {
    id: string
    imgId: string
};
export class SOftDeleteProductController {
    async handle(request: Request, response: Response) {
        let deletedAt = Date.now();
        const {
            id,
            imgId,
        }: productBody = request.body;
        try {
            const product = await prismaClient.product.update({
                where: {
                    id: id
                },
                data: {
                    active: false,
                    deletedAt: format(deletedAt, ("dd/MM/yyyy HH:mm:ss")),
                },

            });
            return response.status(200).json({ msg: "Product as disabled!", product });
        } catch {
            return response.status(400).json({ msg: "Error on disable the Product!" });
        };
    };
};