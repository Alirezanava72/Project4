const mongoose = require("mongoose");


// Comment Model
const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    newsId: {
        type: String,
        required: true,
    },

    userId: {
        type: String,
        required: true
    }
},

    { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);