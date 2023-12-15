"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindSellerByIdController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindSellerByIdController {
    async handle(request, response) {
        const { id, } = request.params;
        const seller = await prismaClient_1.prismaClient.seller.findFirst({
            where: {
                id: id,
            }, take: 1
        });
        return response.status(201).json(seller);
    }
}
exports.FindSellerByIdController = FindSellerByIdController;
