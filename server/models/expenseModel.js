import exprss from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema();

const expenseSchema = new Schema({
    _expenseId: Schema.Types.ObjectId,
    title:{
        type: String,
        require: true,
        trim: true,
    },
    amount:{
        type: Number,
        require: true,
    },
    date:{
        type: Date,
        require: true,
        default: Date.now()
    },
    time:{
        type: Number,
        default: (new Date()).getTime().toString,
    }
});

const expenseModel = mongoose.model('expenseModel', expenseSchema);

export default expenseModel;