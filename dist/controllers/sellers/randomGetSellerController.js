"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomGetSellerController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class randomGetSellerController {
    async handle(request, response) {
        const sellers = await prismaClient_1.prismaClient.seller.findMany({});
        const random = Math.floor(Math.random() * sellers.length);
        try {
            const getRandomSeller = sellers.filter((item, index) => {
                return index === random;
            });
            return response.status(200).json(getRandomSeller);
        }
        catch {
            return response.status(400).json({ error: "Error on randomize seller!Please try again!" });
        }
        ;
    }
    ;
}
exports.randomGetSellerController = randomGetSellerController;
;
