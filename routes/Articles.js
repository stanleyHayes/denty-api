const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const User = require("../models/User");

//creating an article
//status code 201 successful article creation
//status code 500 server error
router.post("/", async function (req, res, next) {
    try {
        const article = {
            title: req.body.title,
            author: req.body.author,
            image: req.body.image,
            causes: req.body.causes,
            treatments: req.body.treatments,
            symptoms: req.body.symptoms,
            preventions: req.body.preventions,
            caption: req.body.caption
        };

        const createdArticle = await Article.create(article);
        const user = await User.findById(req.body.author);
        user.articles.push(await createdArticle._id);
        user.save();
        return res.status(201).json({article: createdArticle});
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//deleting an article
//status code 200 successful deleting article
//status code 404 article not found
//status code 500 server error
router.delete("/:articleID", async function (req, res, next) {
    try {
        const articleID = req.params.articleID;
        await Article.findByIdAndRemove(articleID);
        if (await Article.findById(articleID)) {
            return res.status(400).json({error: "Could not delete Article"});
        } else {
            return res.status(200).json({message: "Article deleted"});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//updating an article
//status code 200 successful article update
//status code 404 article not found
//status code 500 server error
router.put("/:articleID", async function (req, res, next) {
    try {
        const articleID = req.params.articleID;
        const article = await Article.findById(articleID);

        //if article not found
        if (!article) {
            return res.status(404).json({error: "Article not found"});
        } else {
            const updatedArticle = await Article.findByIdAndUpdate(articleID, req.body, {new: true});
            return res.status(200).json({article: updatedArticle});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting an article
//status code 200 successful article acquisition
//status code 404 record not found
//status code 500 server error
router.get("/:articleID", async function (req, res, next) {
    try {
        const articleID = req.params.articleID;
        const article = await Article.findById(articleID);
        if (!article) {
            return res.status(404).json({error: "Article not found"});
        } else {
            return res.status(200).json({article: article});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting articles by author
//status code 200 successful record acquisition
//status code 500 server error
router.get("/", async function (req, res, next) {
    try {
        const queryParams = req.query;
        const articles = await Article.find(queryParams);
        return res.status(200).json({articles: articles});
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


module.exports = router;
