const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductPrice:{
        type:String,
        required:true
    },
    ProductBarcode:{
        type:Number,
        required:true,
    }
},{timestamps:true});
const Products=mongoose.model("Products",ProductSchema);
module.exports=Products;