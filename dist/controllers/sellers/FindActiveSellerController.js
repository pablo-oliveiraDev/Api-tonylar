"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindActiveSellerController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindActiveSellerController {
    async handle(request, response) {
        try {
            const seller = await prismaClient_1.prismaClient.seller.findMany({
                where: {
                    active: true,
                },
            });
            return response.status(201).json(seller);
        }
        catch {
            return response.status(400).json({ msg: "Error on search sellers" });
        }
        ;
    }
    ;
}
exports.FindActiveSellerController = FindActiveSellerController;
;
