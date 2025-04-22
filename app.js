const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser"); 

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { name: "John" });
});

app.get("/about", (req, res) => {
    res.send("About this page");
}); 

app.get("/ejsTest", (req, res) => {
    res.render("ejsTest-Input");
});

app.post("/ejsTest", (req, res) => {
    res.render("testName-output", {
        title: "ejs-Testing-output",
        firstName: req.body.fname, 
        lastName: req.body.lname,
        date: req.body.date,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
    });
});

app.get("/selection", (req, res) => {
    res.render("selection-input");
});

app.post("/selection", (req, res) => {
    res.render("selection-output", {
        title: "ejs-Testing-output",
        firstName: req.body.firstName, // Fixed typo
        lastName: req.body.lastName,
        operation: req.body.operation,
        numOne: req.body.numOne, // Updated to match EJS template
        numTwo: req.body.numTwo, // Updated to match EJS template
    });
});

app.listen(PORT, () => {
    debug(`Listening on port ${chalk.green(PORT)}`);
});