const express = require('express');
const app = express();
const playerRoute = require("./routes/playerRoute"); 
const port = 5000;

// installing EJS
app.set("view engine", "ejs");

//homePage & accessing/creating a path top html and css (which now has become 'ejs' instead of html)
// set static folders first
const path = require("path");
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
 res.render("index", { locals: { text: "text" } });
});

/////////// middleware//////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//accessing the about page within the html/ejs
app.get("/about", (req, res) => {
  res.render("about");
});

//importing players from the data(players.js)
app.use("/players", playerRoute); 

app.listen(port, () => {
console.log(`Server is listening on port: ${port}`);
});
 
