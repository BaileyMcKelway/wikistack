const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models');
const main = require('./views/main')

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))





db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.get("/", (req, res) => {
    res.send(main("HELLLOOOO"))
  })



const PORT = 3000;


//const models = require('./models')


// const init = async () => {
//     await models.db.sync({force: true})
//     app.listen(PORT, () => {
//         console.log(`Server listening in port ${PORT}`);
//     })
// }

// init();

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
})