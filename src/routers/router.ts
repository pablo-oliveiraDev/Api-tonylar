import { Router } from "express";
import { CreateSellerController } from "../controllers/sellers/CreateSellerController";
import { FindAllSellers } from "../controllers/sellers/FindAllSellers";
const router =Router();
//Creates
const createSeller = new CreateSellerController();
router.post('/seller',createSeller.handle);

//get all
const findAllSellers = new FindAllSellers();
router.get("/sellers",findAllSellers.handle)


export { router };