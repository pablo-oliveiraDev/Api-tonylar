"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLoginController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
;
class CreateLoginController {
    async handle(request, response) {
        const { CPF, LoginName, password, } = request.body;
        try {
            const Login = await prismaClient_1.prismaClient.login.create({
                data: {
                    CPF: CPF,
                    LoginName: LoginName,
                    password: password,
                },
            });
            return response.status(201).json({ msg: "Login as Created!", Login });
        }
        catch {
            return response.status(400).json({ msg: "Error on Creating the User" });
        }
        ;
    }
    ;
}
exports.CreateLoginController = CreateLoginController;
;
