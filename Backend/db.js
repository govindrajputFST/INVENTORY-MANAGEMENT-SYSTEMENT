const mongoose=require("mongoose");
const mongoURI="mongodb+srv://dhonirajput208:Govindrajput@cluster0.xfnnv.mongodb.net/INVENTORY-MANAGEMENT";

const connectToMongo=async()=>{
    try {
        mongoose.connect(mongoURI);
        console.log("connect to mongoDb successfully!")
        
    } catch (error) {
        console.log(error);
    }
};
module.exports=connectToMongo;