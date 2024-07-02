const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.render("index");
});

app.post("/createfile", function (req, res) {

    fs.writeFile("data.txt", req.body.content, function (err) {
        if (err) {
            res.status(500).send("Error occurred");
        } else {
            res.status(200).send("File created successfully");
        }
    });

    fs.readFile("data.txt", 'utf8', function(err, data){
        if (err) {
            console.error("An error occurred while reading the file:", err);
            return;
        }
        console.log(data);
    })
});

app.listen(3000);
