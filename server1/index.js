
const app = require('express')()
app.listen(1000, ()=>{
  console.log('Listening to port 1000');
})

app.get("/", (req, res) => {
  // const cookie = "user=yk; samesite=strict; secure";
  const cookie = "user=yk; samesite=lax; secure";
  // const cookie = "user=yk; samesite=none; secure";
  // const cookie = "user=yk;";

  res.setHeader("set-cookie", [cookie]);
  res.sendFile(__dirname + "/index.html");
});

app.get("/img", (req, res) => {
  const cookie = req.headers.cookie;
  if(cookie){
    res.sendFile(`${__dirname}/img.png`)
  }else{
    res.status(403).end()
  }
});
