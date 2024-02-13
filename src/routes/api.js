const express=require('express')
const UserController=require('../controllers/UsersController')
const ProductController=require('../controllers/ProductController')
const AuthVerifyMiddleware=require('../middleware/AuthVerifyMiddleware')
const router=express.Router()

// use

router.post("/registration",UserController.registration);
router.post("/login",UserController.login);
router.get("/profileUpdate",AuthVerifyMiddleware,UserController.profileUpdate);

// Product
router.post("/createProduct",AuthVerifyMiddleware,ProductController.createProduct);
router.post("/updateProductStats/:id",AuthVerifyMiddleware,ProductController.updateProductStats);
router.post("/deleteProduct/:id",AuthVerifyMiddleware,ProductController.deleteProduct);
module.exports=router;