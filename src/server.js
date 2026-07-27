require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

const pool = require("./config/db");

pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected:", result.rows[0]);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});