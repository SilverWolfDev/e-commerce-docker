// backend/app/api/hello.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for frontend requests
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
});
