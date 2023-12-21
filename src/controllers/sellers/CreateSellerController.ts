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
        try {
            const seller = await prismaClient.seller.create({
                data: {
                    name: name,
                    celPhone: celPhone,
                    active: true,
                    whatsLink: `http://wa.me/${celPhone}`,
                    createdAt: format(createdAt, ("dd/MM/yyyy HH:mm:ss")),

                },
            });
            return response.status(201).json({ msg: 'Seller as created!', seller });
        } catch {
            return response.status(400).json({ error: "Error on create the Seller!" });
        };
    };
};