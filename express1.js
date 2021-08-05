// const express = require(`express`);
// const app = express();
// const Hello = require("./HelloWorld1");
// const mysql = require("./mysql1");

// app.get("/", (req, res) => {
//     Hello.Hello(req, res);
// });
// app.get("/api", (req, res) => {
//     res.send("Hello Api");
// });

// app.get("/user/:name?", (req, res) => {
//     if (req.params.name) {
//         res.send("Hello " + req.params.name);
//     }else {
//         res.send("Hello nobody");
//     }
//     // res.send(req.params.name);
// });

// app.use(express.static(__dirname + "/text1"));
// app.get("/practice", (req, res) => {
//     res.sendfile(__dirname + "/text1/practice.txt");
// });

// mysql.mysqlConnect();

// app.listen(4000);
// console.log("server listen ...");




// const express = require("express");
// const app = express();
// const mysql = require("./mysql");

// app.get("/", (req, res) => {
//     res.send("Hello World!!");
// });
// app.get("/api", (req, res) => {
//     res.send("Hello API!!");
// });

// app.get("/user/:name?", (req, res) => {
//     if (req.params.name){
//         res.send("Hello" + req.params.name);
//     }else {
//         res.send("Hello Nobody!");
//     }
// });

// app.use(express.static(__dirname + "/text"));
// app.get("/hello.txt", (req, res) => {
//     res.sendfile(__dirname + "/text/hello.txt");
// });



// app.listen(4000);
// console.log("server listen ... ")

const express = require("express");


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use(express.static (__dirname + "/text"));
app.get("/hello.txt", (req, res) => {
    res.sendfile(__dirname + "/text/hello.txt");
});

app.listen(4000);
console.log("server listen ...");