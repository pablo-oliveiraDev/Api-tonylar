import { Router } from "express";
import { CreateSellerController } from "../controllers/sellers/CreateSellerController";
import { FindAllSellers } from "../controllers/sellers/FindAllSellers";
import { DeleteSellerByIdController } from "../controllers/sellers/DeleteSellerByIdController";
import { UpdateSellerController } from "../controllers/sellers/UpdateSellerController";


const router = Router();
//Creates
const createSeller = new CreateSellerController();
router.post('/seller', createSeller.handle);

//get all
const findAllSellers = new FindAllSellers();
router.get("/sellers", findAllSellers.handle);

//softDelete
const softDeleteSeller = new DeleteSellerByIdController();
router.patch("/softDeleteSeller", softDeleteSeller.handle);

//updates
const updateSeller = new UpdateSellerController();
router.patch("/updateSeller", updateSeller.handle);

//deletes

//random sellers


export { router };