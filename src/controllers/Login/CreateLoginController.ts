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
        try {
            const Login = await prismaClient.login.create({
                data: {
                    CPF: CPF,
                    LoginName: LoginName,
                    password: password,
                },
            });
            return response.status(201).json({ msg: "Login as Created!", Login });
        } catch {
            return response.status(400).json({ msg: "Error on Creating the User" });
        };
    };
};