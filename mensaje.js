const http = require("http")
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'eponce1302',
  database: 'fizzmod'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });


server.listen(8000, ()=>{
    console.log('el user escucha por el 8888')
})