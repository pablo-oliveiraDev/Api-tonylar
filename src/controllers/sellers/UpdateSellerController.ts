import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface sellerBody {
    id: string,
    name: string,
    celNumber: number
};
export class UpdateSellerController {
    async handle(request: Request, response: Response) {
        const {
            id,
            name,
            celNumber
        }: sellerBody = request.body;
        const seller = await prismaClient.seller.update({
            where: {
                id: id
            }, data: {
                name: name,
                celNumber: celNumber,
            },
        });
        return response.status(200).json({ msg: 'Seller as updated!', seller });
    }
}