const express = require("express");
const pool = require("./config/db");
const app = express();

app.use(express.json());

module.exports = app;



app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }   
});