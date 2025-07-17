const express = require("express");
const router = express.Router();

router.get("/user/:user_id", (req, res) => {
    //return recipes, profile picture, stars
});

router.get("/user", (req, res) => {
    //return user_id, username, profile picture, stars
});

router.get("/points", (req, res) => {
    
});

router.post("/profile-picture/", (req, res) => {
    
});

router.post("/bought-recipes/", (req, res) => {
    
});

router.get("/saved-recipes/", (req, res) => {
    
});

router.post("/saved-recipes/", (req, res) => {
    
});

module.exports = router;