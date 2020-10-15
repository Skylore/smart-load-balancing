require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3002;

app.get("/data", (req, res) => {
    res.send("Hello from server 2");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    console.log(`Your app on http://${process.env.HOST}:${PORT}`);
});