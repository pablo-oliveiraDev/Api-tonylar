"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindActiveProductsController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindActiveProductsController {
    async handle(request, response) {
        const product = await prismaClient_1.prismaClient.product.findMany({
            where: {
                active: true
            }
        });
        return response.status(200).json(product);
    }
}
exports.FindActiveProductsController = FindActiveProductsController;
