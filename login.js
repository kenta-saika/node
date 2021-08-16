const express = require("express");
const bodyParser = require("body-parser");
const mysql =require("mysql")
const app = express();
const flash = require("connect-flash");


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



var passport = require('passport');
app.use(passport.initialize());

var localStrategy = require("passport-local").Strategy;



// /login画面
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});






  passport.use(new localStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
 
  function(username, password, done) {
    if(username == 'id' && password == 'pas'){
          return done(null, username);
    }
         return done(null, false, {message:'ID or Passwordが間違っています。'});
  }
));




app.post('/login', 
     passport.authenticate('local',
     
                                   { successRedirect: '/success',
                                     failureRedirect: '/login',
                                     session: true 
                                     },　　　　　　    　　//成功の指定だが、ここでする必要ないかも
                                   
                                      // (req, res) => {
                                      //   console.log("success!!");
                                      //  res.sendFile(path.join(__dirname + "success.html"))}
                                     )
  ); 

//  app.get("/success", (req,res) => {
//   //  const user = req.user;
//   res.send("success");
//  });

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});



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

