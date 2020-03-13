const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db, Page, User } = require('./models');


const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.use("/wiki", require("./routes/wiki"));
app.use("/users", require("./routes/user"));

app.get('/', (req, res) => {
    
    res.redirect('/wiki');
})

// app.get("/", (req, res) => {
//     res.send(main("HELLLOOOO"))
// })

const PORT = 3000;

const init = async () => {
    await User.sync();
    await Page.sync();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  };
  init();

