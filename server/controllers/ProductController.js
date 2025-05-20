

import { Product } from "../models/Product.js";


export const getProductByName=async({name})=>{
    try{
        const product= await Product.findOne({name: name})
        return product
    }
    catch(error){
        console.log(error)
    }
}

/* req.body not res.body */
export const createProduct= async(req, res)=>{
    try{
        const {name, price, category}= req.body    
        const product= await Product.create({name: name, price: price, category: category})
        product.save()
        console.log("Product added successfully!")
    }
    catch(error){
        console.log(error)
    }
}

export const getProducts= async(req, res)=>{
    try{
        const products= await Product.find()
        res.status(200).json(products)
    }
    catch(error){
        res.status(400).json(error)
    }
}