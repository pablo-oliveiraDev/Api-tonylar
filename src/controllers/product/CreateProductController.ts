import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';
import { Buffer } from 'buffer';


interface productBody {
    name: string
    description: string
    price: string

};

export class CreateProductController {

    async handle(request: Request, response: Response) {

        const imgBuffer: any = request.file?.buffer;
        const createdAt = Date.now();
        const {
            name,
            description,
            price,

        }: productBody = request.body;


        function convertValue(price: string): number {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        const product = await prismaClient.product.create({
            data: {
                name: name,
                description: description,
                price: convertValue(price),
                active: true,
                createdAt: format(createdAt, ("dd/MM/yyyy HH:mm:ss")),
                productImages: {
                    create: {
                        image: imgBuffer,
                    },
                }
            },

        });
        return response.status(201).json({ msg: 'Product as created!', product });
    }
}
