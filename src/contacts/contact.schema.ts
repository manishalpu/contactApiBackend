import * as mongoose from 'mongoose';
export const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:false,
    },
    emailId:{
        type: String,
        required:true,
    }
});