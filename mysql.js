exports.mysqlConnect = () => {
    const mysql = require("mysql");

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });

     con.connect((err) => {
        if(err) throw err;
        console.log(`Connented!`);

        const sql = "select * from test.customers"
        con.query(sql, (err, result, fields) => {
            if(err) throw err;
            console.log(result); 
            console.log(result[0].CustomerName); 
        });
    });
}