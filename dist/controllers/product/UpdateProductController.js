"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
;
class UpdateProductController {
    async handle(request, response) {
        const imgBuffer = request.file?.buffer.toString('base64');
        const { id, name, description, price, imgId, } = request.body;
        function convertValue(price) {
            const convertedPrice = price.replace(/\./g, "").replace(",", ".");
            const brPrice = parseFloat(convertedPrice).toFixed(2);
            return Number(brPrice);
        }
        try {
            const product = await prismaClient_1.prismaClient.product.update({
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
                include: {
                    productImages: true
                }
            });
            return response.status(200).json({ msg: "Product as Updated!", product });
        }
        catch {
            return response.status(500).json({ msg: "Error to Update Product" });
        }
        ;
    }
    ;
}
exports.UpdateProductController = UpdateProductController;
;
