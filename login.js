const express = require("express");
const bodyParser = require("body-parser");
const mysql =require("mysql")
const app = express();


var passport = require('passport');
app.use(passport.initialize());

var localStrategy = require("passport-local").Strategy;
const { response } = require("express");


// /login画面
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/success', (req, res) => {
  res.sendFile(__dirname + '/success.html');
});


app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', 
    passport.authenticate('local', { successRedirect:"/success.html",
                                     failureRedirect: '/login',
                                     session: false }),　　　　　　　　//成功の指定だが、ここでする必要ないかも
                                     (req, res) => {
                                       res.send("success");
                                     }
  ); 


  passport.use(new localStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
 
  function(username, password, done) {
    if(username == 'myname' && password == 'mypassword'){
          return done(null, username, {message: "success"});
    }
         return done(null, false, {message:'ID or Passwordが間違っています。'});
  }
)
);

  //mysqlからデータを取り出して入力された値と照合させる
  const port = 3306;
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });


// mysql.mysqlConnect();
app.listen(4000);
console.log("server listen ...");
