"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
;
class UpdateProductController {
    async handle(request, response) {
        const { id, name, description, price, image, } = request.body;
        function convertValue(price) {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        const product = await prismaClient_1.prismaClient.product.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description,
                price: convertValue(price),
                active: true,
                image: image,
                deletedAt: null,
            },
        });
        return response.status(200).json({ msg: "Product as Updated!", product });
    }
}
exports.UpdateProductController = UpdateProductController;
