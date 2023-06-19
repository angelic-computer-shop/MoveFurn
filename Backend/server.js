const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;
const routers = require("./routes/routers");
const cors=require("cors")

app.use(cors({
  origin:'http://localhost:4200'
}))

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
  
});
app.use("/", routers);
