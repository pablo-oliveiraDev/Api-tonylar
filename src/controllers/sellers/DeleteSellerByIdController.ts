import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
interface sellerBody {
    id: string
};
export class DeleteSellerByIdController {
    async handle(request: Request, response: Response) {
        const {
            id
        }: sellerBody = request.body;
        const seller = await prismaClient.seller.delete({
           where:{
            id :id
           }
        });
        return response.status(200).json({msg:'Seller as deleted!',seller});
    }
}