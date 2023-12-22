"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLogedController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
;
class CreateLogedController {
    async handle(request, response) {
        const { CPF, LoginName, password } = request.body;
        const Loged = await prismaClient_1.prismaClient.login.findFirst({
            where: {
                CPF: CPF,
                AND: {
                    password: password
                }
            },
        });
        if (Loged !== null) {
            return response.status(201).json({ msg: `${Loged.LoginName} as loged!`, Loged });
        }
        else {
            return response.status(401).json({ msg: "Login as not found! Verify your information and try again!" });
        }
        ;
    }
}
exports.CreateLogedController = CreateLogedController;
