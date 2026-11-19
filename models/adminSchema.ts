import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    username: {type:String, required: true, trim: true},
    password: {type:String, required: true, trim: true},
}, {timestamps: true});


const adminModel = mongoose.models.admins || mongoose.model("admins", adminSchema);

export default adminModel;