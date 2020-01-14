const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image_uri: {
        type: String,
        required: true
    },
    causes: {
        type: [String],
        required: true
    },
    treatment: {
        type: [String],
        required: true
    }
    ,
    symptoms: {
        type: [String],
        required: true
    },
    prevention: {
        type: [String],
        required: true
    },
    date_posted: {
        type: Date,
        default: Date.now
    },
    date_modified: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;