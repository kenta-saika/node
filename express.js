const express = require("express");
const app = express();
const Hello = require("./HelloWorld");
// const { mysql } = require("./mysql");
const mysql = require("./mysql");

//URL分岐
app.get("/", (req, res) => {
    Hello.Hello(req, res);
});
app.get("/api", (req, res) => {
    res.send("Hello Api!");
});

// プレースホルダ―(今回は：nameがそこにあたる)
app.get("/user/:name?", (req, res) => {
    if (req.params.name) {
        res.send("Hello "+ req.params.name);
    }else {
        res.send("Hello nobody!");
    }
    // res.send(req.params.name);
});

//ファイルの読み込み(ミドルウェア)
app.use(express.static(__dirname + "/text"));
app.get("/hello.txt", (req, res) => {
    res.sendFile(__dirname + "/text/hello.txt");
});

mysql.mysqlConnect();

app.listen(4000);
console.log("server listen ...");