"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSellerController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const date_fns_1 = require("date-fns");
;
class CreateSellerController {
    async handle(request, response) {
        let createdAt = Date.now();
        const { name, celPhone } = request.body;
        const seller = await prismaClient_1.prismaClient.seller.create({
            data: {
                name: name,
                celPhone: celPhone,
                active: true,
                whatsLink: `http://wa.me/${celPhone}`,
                createdAt: (0, date_fns_1.format)(createdAt, ("dd/MM/yyyy HH:mm:ss")),
            },
        });
        return response.status(201).json({ msg: 'Seller as created!', seller });
    }
}
exports.CreateSellerController = CreateSellerController;
