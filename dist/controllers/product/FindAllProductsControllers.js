"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductsControllers = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindAllProductsControllers {
    async handle(request, response) {
        const product = await prismaClient_1.prismaClient.product.findMany({});
        return response.status(200).json(product);
    }
}
exports.FindAllProductsControllers = FindAllProductsControllers;
