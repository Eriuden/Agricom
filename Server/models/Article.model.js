const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
            required: true 
        },

        name: {
            type: String,
            trim: true,
            maxlength: 200,
            required: true,
        },

        productType: {
            type: String,
            trim: true,
            maxlength: 100,
            required: true,
        },

        price: {
            type: String,
            trim: true,
            max: 10,
            required: true,
        },
        
    },
    {timestamps : true}
)

const articleModel = mongoose.model("article", articleSchema)
module.exports = articleModel