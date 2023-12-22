"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductsControllers = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindAllProductsControllers {
    async handle(request, response) {
        try {
            const product = await prismaClient_1.prismaClient.product.findMany({
                include: {
                    productImages: true
                }
            });
            return response.status(200).json(product);
        }
        catch {
            return response.status(404).json({ msg: "Error in search products" });
        }
        ;
    }
    ;
}
exports.FindAllProductsControllers = FindAllProductsControllers;
;
