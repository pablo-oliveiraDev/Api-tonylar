import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface productBody {
    id: string
    name: string
    description: string
    price: string
    imgId: string

};
export class UpdateProductController {
    async handle(request: Request, response: Response) {
        const imgBuffer = request.file?.buffer.toString('base64');
        const {
            id,
            name,
            description,
            price,
            imgId,

        }: productBody = request.body;
        function convertValue(price: string): number {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        try {
            const product = await prismaClient.product.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    description: description,
                    price: convertValue(price),
                    active: true,
                    deletedAt: null,
                    productImages: {
                        update: {
                            where: {
                                id: imgId,
                            },
                            data: {
                                image: imgBuffer,
                            },
                        },
                    },
                },
            });
            return response.status(200).json({ msg: "Product as Updated!", product });
        } catch {
            return response.status(500).json({ msg: "Error to Update Product" });
        };
    };
};