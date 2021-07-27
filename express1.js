const express = require(`express`);
const app = express();
const Hello = require("./HelloWorld1");
const mysql = require("./mysql1");

app.get("/", (req, res) => {
    Hello.Hello(req, res);
});
app.get("/api", (req, res) => {
    res.send("Hello Api");
});

app.get("/user/:name?", (req, res) => {
    if (req.params.name) {
        res.send("Hello " + req.params.name);
    }else {
        res.send("Hello nobody");
    }
    // res.send(req.params.name);
});

app.use(express.static(__dirname + "/text1"));
app.get("/practice", (req, res) => {
    res.sendfile(__dirname + "/text1/practice.txt");
});

mysql.mysqlConnect();

app.listen(4000);
console.log("server listen ...");