import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';


interface sellerBody {
    name: string;
    celPhone: number;
};

export class CreateSellerController {
    async handle(request: Request, response: Response) {
        let createdAt = Date.now();
        const {
            name,
            celPhone
        }: sellerBody = request.body;
        const seller = await prismaClient.seller.create({
            data: {
                name: name,
                celPhone: celPhone,
                active: true,
                createdAt: format(createdAt, ("dd/MM/yyyy HH:mm:ss")),

            },
        });
        return response.status(201).json({ msg: 'Seller as created!', seller });
    }
}