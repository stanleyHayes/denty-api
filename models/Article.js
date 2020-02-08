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
    image: {
        type: String,
        required: true
    },
    causes: {
        type: [String],
        required: true
    },
    treatments: {
        type: [String],
        required: true
    }
    ,
    symptoms: {
        type: [String],
        required: true
    },
    preventions: {
        type: [String],
        required: true
    },
    published_date: {
        type: Date,
        default: Date.now
    },
    date_modified: {
        type: Date,
        default: Date.now
    },
    caption: {
        type: String,
        required: true
    }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
