import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface LoginBody {
    CPF: string
    LoginName: string
    password: string
};
export class CreateLoginController {
    async handle(request: Request, response: Response) {
        const {
            CPF,
            LoginName,
            password,
        }: LoginBody = request.body;
        const Login = await prismaClient.login.create({
            data: {
                CPF: CPF,
                LoginName: LoginName,
                password: password,
            },
        });
        return response.status(201).json({ msg: "Login as Created!", Login });
    }
}