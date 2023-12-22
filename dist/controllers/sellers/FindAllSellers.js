"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllSellers = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindAllSellers {
    async handle(request, response) {
        try {
            const sellers = await prismaClient_1.prismaClient.seller.findMany({});
            return response.status(200).json(sellers);
        }
        catch {
            return response.status(400).json({ msg: "Error on search sellers!" });
        }
        ;
    }
    ;
}
exports.FindAllSellers = FindAllSellers;
;
