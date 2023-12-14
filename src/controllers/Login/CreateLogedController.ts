import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface LogedBody {
    CPF: string
    LoginName: string
    password: string
};
export class CreateLogedController {
    async handle(request: Request, response: Response) {
        const {
            CPF,
            LoginName,
            password
        }: LogedBody = request.body;
        const Loged = await prismaClient.login.findFirst({
            where: {
                CPF: CPF,
                AND: {
                    password: password
                }
            },
        });
        if (Loged !== null) {
            return response.status(201).json({ msg: `${Loged.LoginName} as loged!`, Loged });
        } else {
            return response.status(401).json({ msg: "Login as not found! Verify your information and try again!" })
        };

    }
}