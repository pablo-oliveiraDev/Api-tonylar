"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLoginController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
;
class CreateLoginController {
    async handle(request, response) {
        const { CPF, LoginName, password, } = request.body;
        const Login = await prismaClient_1.prismaClient.login.create({
            data: {
                CPF: CPF,
                LoginName: LoginName,
                password: password,
            },
        });
        return response.status(201).json({ msg: "Login as Created!", Login });
    }
}
exports.CreateLoginController = CreateLoginController;
