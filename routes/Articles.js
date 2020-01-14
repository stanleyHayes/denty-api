const express = require("express");
const router = express.Router();


//creating an article
//status code 201 successful article creation
//status code 500 server error
router.post("/", async function (req, res, next) {
    try {

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

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting articles by author
//status code 200 successful record acquisition
//status code 500 server error
router.get("/", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


module.exports = router;