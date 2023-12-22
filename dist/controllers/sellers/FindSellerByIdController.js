"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindSellerByIdController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindSellerByIdController {
    async handle(request, response) {
        const { id, } = request.params;
        try {
            const seller = await prismaClient_1.prismaClient.seller.findFirst({
                where: {
                    id: id,
                }, take: 1
            });
            return response.status(201).json(seller);
        }
        catch {
            return response.status(404).json({ message: "Sellers is not found!" });
        }
        ;
    }
    ;
}
exports.FindSellerByIdController = FindSellerByIdController;
;
