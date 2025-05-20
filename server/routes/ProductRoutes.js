

import { getProductByName, createProduct, getProducts } from "../controllers/ProductController.js";
import express from "express"

const route= express.Router()

route.get('/getProduct', getProductByName)

route.post('/createProduct', createProduct)

route.get('/getAllProducts', getProducts)

export default route