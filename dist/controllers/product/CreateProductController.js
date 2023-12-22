"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const date_fns_1 = require("date-fns");
;
class CreateProductController {
    async handle(request, response) {
        const imgBuffer = request.file?.buffer.toString('base64');
        const createdAt = Date.now();
        const { name, description, price, } = request.body;
        function convertValue(price) {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        try {
            const product = await prismaClient_1.prismaClient.product.create({
                data: {
                    name: name,
                    description: description,
                    price: convertValue(price),
                    active: true,
                    createdAt: (0, date_fns_1.format)(createdAt, ("dd/MM/yyyy HH:mm:ss")),
                    productImages: {
                        create: {
                            image: imgBuffer
                        },
                    }
                },
                include: {
                    productImages: true
                }
            });
            return response.status(201).json({ msg: 'Product as created!', product });
        }
        catch {
            return response.status(500).json({ msg: 'Error to create the Product' });
        }
        ;
    }
    ;
}
exports.CreateProductController = CreateProductController;
;
