import mongoose from "mongoose"

/* Defining the schema first before converting it into a model */

/* The "new" keyword is a must if you want the schema to function properly in the controller
where product.find(), product.findOne() etc will work! */

const product= new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    price:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
})

export const Product= mongoose.model("product", product)

/*Why couldn't we export default Product? because there is no Product before, only product */

/* export default and export const difference: export default gives us one single value as default 
whereas export const can export many named entities from a single file */