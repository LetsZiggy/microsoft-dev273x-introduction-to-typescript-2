const path = require("path")
const express = require("express")

const app = express()

const staticPath = path.join(__dirname, "/")
const options = {
  root: staticPath,
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true
  }
}

app.use(express.static(staticPath)) // /^\/[A-Za-z0-9_]+.js$/

app.get("/", function(req, res) {
  res.sendFile("module_4_self_assessment.html", options, function (err) {
    if (err) {
      console.log(err)
    }
  });
});

app.listen(3000, function () {
  console.log("listening")
})
