import { Router } from "express";
import Multer from "multer";
import { CreateSellerController } from "../controllers/sellers/CreateSellerController";
import { FindAllSellers } from "../controllers/sellers/FindAllSellers";
import { DeleteSellerByIdController } from "../controllers/sellers/DeleteSellerByIdController";
import { UpdateSellerController } from "../controllers/sellers/UpdateSellerController";
import { randomGetSellerController } from "../controllers/sellers/randomGetSellerController";
import { FindSellerByIdController } from "../controllers/sellers/FindSellerByIdController";
import { CreateProductController } from "../controllers/product/CreateProductController";
import { CreateLoginController } from "../controllers/Login/CreateLoginController";
import { CreateLogedController } from "../controllers/Login/CreateLogedController";
import { FindAllProductsControllers } from "../controllers/product/FindAllProductsControllers";
import { FindActiveProductsController } from "../controllers/product/FindActiveProductsController";
import { SOftDeleteProductController } from "../controllers/product/SOftDeleteProductController";
import { UpdateProductController } from "../controllers/product/UpdateProductController";
import { FindActiveSellerController } from "../controllers/sellers/FindActiveSellerController";


const router:Router = Router();
const upload = Multer();
//Creates
const createSeller = new CreateSellerController();
router.post('/seller', createSeller.handle);

const createProduct = new CreateProductController();
router.post('/createProduct', upload.single("imgProduct"), createProduct.handle);

const createLogin = new CreateLoginController();
router.post('/createLogin', createLogin.handle);

const createLoged = new CreateLogedController();
router.post("/loged", createLoged.handle);

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

const findActiveProduct = new FindActiveProductsController();


//softDelete
const softDeleteSeller = new DeleteSellerByIdController();
router.patch("/softDeleteSeller", softDeleteSeller.handle)

const softDeleteProduct = new SOftDeleteProductController();
router.patch("/softDeleteProduct", softDeleteProduct.handle);

//updates
const updateSeller = new UpdateSellerController();
router.patch("/updateSeller", updateSeller.handle);

const updateProduct = new UpdateProductController();
router.patch("/updateProduct", upload.single("imgProduct"), updateProduct.handle);
//deletes

//random sellers
const randomSeller = new randomGetSellerController();
router.get("/randomSeller", randomSeller.handle);


export { router };