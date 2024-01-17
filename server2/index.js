const app = require("express")();
app.listen(2000, () => {
  console.log("Listening to port 2000");
});

app.get("/", (req, res) => {
  // res.send("Welcome to my server2");
  res.sendFile(`${__dirname}/index.html`)
});
