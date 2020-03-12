const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const client = require("./db");
const main = require('./views/main')

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.send(main("HELLLOOOO"))
  })



const PORT = 3000;

app.listen(PORT, () => {
console.log(`App listening in port ${PORT}`);
});