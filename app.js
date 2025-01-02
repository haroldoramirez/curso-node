//import { express } from 'express';
const express = require("express");


const app = express();

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/user", function(req, res) {
    res.send({
        none: "Haroldo"
    });
});

app.listen(8080, function() {
    console.log("Servidor rodando!");
})