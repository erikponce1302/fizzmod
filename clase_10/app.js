const http = require("http")
const mysql = require("mysql")



const con = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user : "root",
    password: "eponce1302",
    database: ""
})

const server = http.createServer((req,res) =>{
    con.query("select * from alumnos", (err, resp, fields)=>{
        if(err){
            res.writeHead(400, {"content-type":"text-plain"})
        }
        console.table(fields)
        console.table(res)
    })
    res.end("hola mundo")
})

con.connect(err =>{
    if(err){
        console.error(err)
    }
    console.log("se levanto el servidor web")
    server.listen(8000, ()=>{
        console.log("se levanto el servidor")
    })
})


