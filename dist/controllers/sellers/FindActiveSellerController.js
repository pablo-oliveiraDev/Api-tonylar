"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindActiveSellerController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindActiveSellerController {
    async handle(request, response) {
        const seller = await prismaClient_1.prismaClient.seller.findMany({
            where: {
                active: true,
            },
        });
        return response.status(201).json(seller);
    }
}
exports.FindActiveSellerController = FindActiveSellerController;
