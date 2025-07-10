const express = require("express");
const router = express.Router();

app.get("/user/:user_id", (req, res) => {
    //return recipes, profile picture, stars
});

app.get("/user", (req, res) => {
    //return user_id, username, profile picture, stars
});

app.get("/points", (req, res) => {
    
});

app.post("/profile-picture/", (req, res) => {
    
});

app.post("/bought-recipes/", (req, res) => {
    
});

app.get("/saved-recipes/", (req, res) => {
    
});

app.post("/saved-recipes/", (req, res) => {
    
});

module.exports = router;