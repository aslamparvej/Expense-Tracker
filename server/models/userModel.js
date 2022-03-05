import express from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema();

const userSchema = new Schema({
    _userId: Schema.Types.ObjectId,
    username:{
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: email,
        require:true,
        unique: true
    },
    name:{
        type:String,
        require:true
    }
});

const userModel = mongoose.model('userModel', userSchema);
export default userModel;