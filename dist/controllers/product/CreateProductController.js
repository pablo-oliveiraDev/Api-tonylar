"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const date_fns_1 = require("date-fns");
;
class CreateProductController {
    async handle(request, response) {
        const createdAt = Date.now();
        const { name, description, price, image, } = request.body;
        function convertValue(price) {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        const product = await prismaClient_1.prismaClient.product.create({
            data: {
                name: name,
                description: description,
                price: convertValue(price),
                image: image,
                active: true,
                createdAt: (0, date_fns_1.format)(createdAt, ("dd/MM/yyyy HH:mm:ss")),
            },
        });
        return response.status(201).json({ msg: 'Product as created!', product });
    }
}
exports.CreateProductController = CreateProductController;
