import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';
interface sellerBody {
    id: string
};
const deletedAt = Date.now();
export class DeleteSellerByIdController {
    async handle(request: Request, response: Response) {
        const deletedAt = Date.now();
        const {
            id
        }: sellerBody = request.body;
        const seller = await prismaClient.seller.update({
            where: {
                id: id
            },
            data: {
                active:false,
                deletedAt: format(deletedAt, ('dd/MM/yyyy HH:mm:ss')),

            }
        });
        return response.status(201).json({ msg: 'Seller as disabled!', seller });
    }
}