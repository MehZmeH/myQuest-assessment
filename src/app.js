var http = require("http");
var indexRouter = require(`./routers/index.router`);
var emailRouter = require(`./routers/email.router`);

var express = require("express");

var app = express();
app.use(express.json());

app.use("/email", emailRouter);
app.use("/", indexRouter);

const httpServer = http
  .createServer(app)
  .listen("3000", () => console.log(`Server started on PORT:  3000`));
