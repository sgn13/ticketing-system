const express = require("express");
const app = express();
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// for parsing application/json
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if (req.method == "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT", "POST", "GET", "DELETE");
//     return res.status(200).json("ok");
//   }
//   next();
// });
//app.use(cors());
//Route Path
app.use("/api/query", require("./routes/api/query"));
app.use("/api/answer", require("./routes/api/answer"));

app.post("/", (req, res) => {
  res.send(req.body);
});
app.set("view engine", "hbs");
app.use("/users", require("./routes/api/userRouter"));
app.use("/oauth", require("./routes/api/oauthRouter"));

module.exports = app;
