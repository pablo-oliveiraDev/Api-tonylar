"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateSellerController_1 = require("../controllers/sellers/CreateSellerController");
const FindAllSellers_1 = require("../controllers/sellers/FindAllSellers");
const DeleteSellerByIdController_1 = require("../controllers/sellers/DeleteSellerByIdController");
const UpdateSellerController_1 = require("../controllers/sellers/UpdateSellerController");
const randomGetSellerController_1 = require("../controllers/sellers/randomGetSellerController");
const FindSellerByIdController_1 = require("../controllers/sellers/FindSellerByIdController");
const FindActiveSellerController_1 = require("../controllers/sellers/FindActiveSellerController");
const CreateProductController_1 = require("../controllers/product/CreateProductController");
const FindAllProductsControllers_1 = require("../controllers/product/FindAllProductsControllers");
const UpdateProductController_1 = require("../controllers/product/UpdateProductController");
const SOftDeleteProductController_1 = require("../controllers/product/SOftDeleteProductController");
const FindActiveProductsController_1 = require("../controllers/product/FindActiveProductsController");
const CreateLoginController_1 = require("../controllers/Login/CreateLoginController");
const router = (0, express_1.Router)();
exports.router = router;
const createSeller = new CreateSellerController_1.CreateSellerController();
router.post('/seller', createSeller.handle);
const createProduct = new CreateProductController_1.CreateProductController();
router.post('/createProduct', createProduct.handle);
const createLogin = new CreateLoginController_1.CreateLoginController();
router.post('/createLogin', createLogin.handle);
const findAllSellers = new FindAllSellers_1.FindAllSellers();
router.get("/sellers", findAllSellers.handle);
const findAllProducts = new FindAllProductsControllers_1.FindAllProductsControllers();
router.get("/allProducts", findAllProducts.handle);
const findSellerById = new FindSellerByIdController_1.FindSellerByIdController();
router.get("/sellerById/:id", findSellerById.handle);
const activeSellers = new FindActiveSellerController_1.FindActiveSellerController();
router.get("/activeSellers", activeSellers.handle);
const findActiveProduct = new FindActiveProductsController_1.FindActiveProductsController();
const softDeleteSeller = new DeleteSellerByIdController_1.DeleteSellerByIdController();
router.patch("/softDeleteSeller", softDeleteSeller.handle);
const softDeleteProduct = new SOftDeleteProductController_1.SOftDeleteProductController();
router.patch("/softDeleteProduct", softDeleteProduct.handle);
const updateSeller = new UpdateSellerController_1.UpdateSellerController();
router.patch("/updateSeller", updateSeller.handle);
const updateProduct = new UpdateProductController_1.UpdateProductController();
router.patch("/updateProduct", updateProduct.handle);
const randomSeller = new randomGetSellerController_1.randomGetSellerController();
router.get("/randomSeller", randomSeller.handle);