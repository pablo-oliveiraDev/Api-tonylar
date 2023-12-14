"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllSellers = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class FindAllSellers {
    async handle(request, response) {
        const sellers = await prismaClient_1.prismaClient.seller.findMany({});
        return response.status(200).json(sellers);
    }
    ;
}
exports.FindAllSellers = FindAllSellers;
;
