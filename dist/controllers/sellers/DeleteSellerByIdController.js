"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSellerByIdController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const date_fns_1 = require("date-fns");
;
const deletedAt = Date.now();
class DeleteSellerByIdController {
    async handle(request, response) {
        const deletedAt = Date.now();
        const { id } = request.body;
        const seller = await prismaClient_1.prismaClient.seller.update({
            where: {
                id: id
            },
            data: {
                active: false,
                deletedAt: (0, date_fns_1.format)(deletedAt, ('dd/MM/yyyy HH:mm:ss')),
            }
        });
        return response.status(201).json({ msg: 'Seller as disabled!', seller });
    }
}
exports.DeleteSellerByIdController = DeleteSellerByIdController;
