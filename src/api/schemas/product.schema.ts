import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const productModel = mongoose.model('Product',productSchema)

export default productModel