import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://accredian:4321@cluster0.r1ebhnm.mongodb.net/referwin').then(()=>console.log("DB Connected"));
}