import { Schema, Document, model } from "mongoose";
const mongoose = require("mongoose")

export interface IArticle extends Document {
  picture : string;
  name: string;
  productType: string;
  price : string;
}

const articleSchema = new mongoose.Schema(
    {
        picture: {
            required: true 
        },

        name: {
            trim: true,
            maxlength: 200,
            required: true,
        },

        productType: {
            trim: true,
            maxlength: 100,
            required: true,
        },

        price: {
            trim: true,
            max: 10,
            required: true,
        },
        
    },
    {timestamps : true}
)

const articleModel = model<IArticle>("article", articleSchema)
module.exports = articleModel