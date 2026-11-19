import mongoose from "mongoose";


const appVerSchema = new mongoose.Schema({
    url: {type:String, required: true, trim:true},
    version: {type:String, required: true, trim:true}
}, {timestamps: true});


const appModel = mongoose.models.versions || mongoose.model("versions", appVerSchema);

export default appModel;
