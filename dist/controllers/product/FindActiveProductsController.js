"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindActiveProductsController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindActiveProductsController {
    async handle(request, response) {
        try {
            const product = await prismaClient_1.prismaClient.product.findMany({
                where: {
                    active: true
                },
                include: {
                    productImages: true
                }
            });
            return response.status(200).json(product);
        }
        catch {
            return response.status(500).json({ msg: "Product as not found!Please try again!" });
        }
        ;
    }
    ;
}
exports.FindActiveProductsController = FindActiveProductsController;
;
