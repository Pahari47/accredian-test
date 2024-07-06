import mongoose from "mongoose";

const referSchema = new mongoose.Schema({
    email: {type:String,required:true},
    code: {type:String,required:true}
})

const referModel = mongoose.models.refer || mongoose.model("refer", referSchema)

export default referModel;