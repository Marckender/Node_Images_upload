const express = require("express");

const app = express();

const port = 8005;

app.get("/", (req, res) => {
    res.send("server start")
})

app.listen(port,  () => {
    console.log(` server start at port no http://localhost:${port}`);
});