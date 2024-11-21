const express=require("express");
const router=express.Router();
const products=require('../Models/Products');

router.post("/insertproduct", async(req,res)=>{
    const {ProductName,ProductPrice,ProductBarcode}=req.body;
try {
    const pre=await products.findOne({ProductBarcode:ProductBarcode})
    console.log(pre);
    if(pre){
        res.status(422).json("Product is already added.")
    }else{
        const addProduct=new products({ProductName,ProductPrice,ProductBarcode})
        await addProduct.save();
        res.status(201).json(addProduct);
        console.log(addProduct)
    }
} catch (error) {
    console.log(error);
}

})
router.get("/products", async(req,res)=>{
   
try {
    const getProducts=await products.find({})
    console.log(getProducts);
    res.status(201).json(getProducts);
       
} catch (error) {
    console.log(error);
}

})
router.get("/products/:id",async (req,res)=>{
    try {
        const getproducts=await products.find(req.params.id);
        console.log(getproducts);
        res.status(200).json(getproducts);

    } catch (error) {
        console.log(error);
    }
})
router.put('/updateProduct/:id',async(req,res)=>{
    const {ProductName,ProductPrice,ProductBarcode}=req.body;
    try {
        const updateProducts=await products.findByIdAndUpdate(req.params.id,{ProductName,ProductPrice,ProductBarcode},{new:true})
        console.log("data Updated")
        res.status(201).json(updataProducts);
    } catch (error) {
        console.log(error);

    }
})
router.delete("/deleteproduct/:id",async(req,res)=>{
    try {
        const deleteProduct=await products.findByIdAndDelete(req.params.id);
        console.log("data deleted");
        res.status(201).json(deleteProduct);
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;