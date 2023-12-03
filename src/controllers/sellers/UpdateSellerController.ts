import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';
interface sellerBody {
    id: string,
    name: string,
    celPhone: number
};
export class UpdateSellerController {
    async handle(request: Request, response: Response) {
        let deletedAt = Date.now();
        const {
            id,
            name,
            celPhone
        }: sellerBody = request.body;
        const seller = await prismaClient.seller.update({
            where: {
                id: id
            }, data: {
                name: name,
                celPhone: celPhone,
                createdAt: format(deletedAt, ('dd/MM/yyyy HH:mm:ss')),
            },
        });
        return response.status(200).json({ msg: 'Seller as updated!', seller });
    }
}