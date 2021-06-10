const express = require('express')
const path = require('path');

const app = express();
const port = 8000;

app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  // res.status(200).send("WHATS-UP: Food For Devs");
  res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
  res.render("user", {title:"Profile", userProfile:{nickname:"Mahri"}});
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});



app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
