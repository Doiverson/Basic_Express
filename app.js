const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('Hi there!!')
})

app.get("/sho", (req, res) => {
    res.send('Sho!!')
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has started!!");
})
