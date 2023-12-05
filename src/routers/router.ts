import { Router } from "express";
import { CreateSellerController } from "../controllers/sellers/CreateSellerController";
import { FindAllSellers } from "../controllers/sellers/FindAllSellers";
import { DeleteSellerByIdController } from "../controllers/sellers/DeleteSellerByIdController";
import { UpdateSellerController } from "../controllers/sellers/UpdateSellerController";
import { randomGetSellerController } from "../controllers/sellers/randomGetSellerController";
import { FindSellerByIdController } from "../controllers/sellers/FindSellerByIdController";
import { FindActiveSellerController } from "../controllers/sellers/FindActiveSellerController";
//import products
import { CreateProductController } from "../controllers/product/CreateProductController";
import { FindAllProductsControllers } from "../controllers/product/FindAllProductsControllers";


const router = Router();
//Creates
const createSeller = new CreateSellerController();
router.post('/seller', createSeller.handle);

const createProduct = new CreateProductController();
router.post('/createProduct', createProduct.handle);

//get all
const findAllSellers = new FindAllSellers();
router.get("/sellers", findAllSellers.handle);

const findAllProducts = new FindAllProductsControllers();
router.get("/allProducts", findAllProducts.handle);

//get find one
const findSellerById = new FindSellerByIdController();
router.get("/sellerById/:id", findSellerById.handle);

const activeSellers = new FindActiveSellerController();
router.get("/activeSellers", activeSellers.handle);

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