import { Router } from "express";
import { CreateSellerController } from "../controllers/sellers/CreateSellerController";
import { FindAllSellers } from "../controllers/sellers/FindAllSellers";
import { DeleteSellerByIdController } from "../controllers/sellers/DeleteSellerByIdController";
import { UpdateSellerController } from "../controllers/sellers/UpdateSellerController";
import { randomGetSellerController } from "../controllers/sellers/randomGetSellerController";
import { FindSellerByIdController } from "../controllers/sellers/FindSellerByIdController";


const router = Router();
//Creates
const createSeller = new CreateSellerController();
router.post('/seller', createSeller.handle);

//get all
const findAllSellers = new FindAllSellers();
router.get("/sellers", findAllSellers.handle);

//get find one
const findSellerById = new FindSellerByIdController();
router.get("/sellerById/:id", findSellerById.handle);

//softDelete
const softDeleteSeller = new DeleteSellerByIdController();
router.patch("/softDeleteSeller", softDeleteSeller.handle);

//updates
const updateSeller = new UpdateSellerController();
router.patch("/updateSeller", updateSeller.handle);

//deletes

//random sellers
const randomSeller = new randomGetSellerController();
router.get("/randomSeller", randomSeller.handle);


export { router };