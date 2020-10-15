const express = require('express');
const app = express();
const PORT = 3003;

app.get("/data", (req, res) => {
    res.send("Hello from server 3");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});