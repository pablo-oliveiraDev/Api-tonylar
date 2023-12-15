"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOftDeleteProductController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const date_fns_1 = require("date-fns");
;
class SOftDeleteProductController {
    async handle(request, response) {
        let deletedAt = Date.now();
        const { id } = request.body;
        const product = await prismaClient_1.prismaClient.product.update({
            where: {
                id: id
            },
            data: {
                active: false,
                deletedAt: (0, date_fns_1.format)(deletedAt, ("dd/MM/yyyy HH:mm:ss")),
            },
        });
        return response.status(200).json({ msg: "Product as disabled!", product });
    }
}
exports.SOftDeleteProductController = SOftDeleteProductController;
