import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
})

export default mongoose.model('Items', itemsSchema);