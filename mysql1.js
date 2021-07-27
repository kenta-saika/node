exports.mysqlConnect = () => {
  const mysql = require("mysql1");

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });

    con.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
    });
}