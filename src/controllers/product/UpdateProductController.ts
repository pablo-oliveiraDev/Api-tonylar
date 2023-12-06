import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface productBody {
    id: string
    name: string
    description: string
    price: string
    image: string
};
export class UpdateProductController {
    async handle(request: Request, response: Response) {
        const {
            id,
            name,
            description,
            price,
            image,
        }: productBody = request.body;
        function convertValue(price: string): number {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        const product = await prismaClient.product.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description,
                price: convertValue(price),
                active: true,
                image: image,
                deletedAt:null,
            },
        });
        return response.status(200).json({msg:"Product as Updated!",product});
    }
}