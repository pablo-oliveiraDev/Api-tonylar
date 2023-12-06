import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';

interface productBody {
    id: string
};
export class SOftDeleteProductController {
    async handle(request: Request, response: Response) {
        let deletedAt = Date.now();
        const {
            id
        }: productBody = request.body;
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
    }
}