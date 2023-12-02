import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface sellerBody {
    name: string;
    celNumber: number;
};
export class CreateSellerController {
    async handle(request: Request, response: Response) {
        const {
            name,
            celNumber,

        }: sellerBody = request.body;
        const seller = await prismaClient.seller.create({
            data: {
                name: name,
                celNumber: celNumber,
            },
        });
        return response.status(200).json({ msg: 'Seller as created!', seller });
    }
}