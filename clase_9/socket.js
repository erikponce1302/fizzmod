const mysql = require("mysql")
const socket = require("socket.io")
const http = require("http")
const template = require("./template")



//en socket io hay dos varaibles en vez de una

/**
 * io = represnta todos los sockets conectados al servidor de websocket
 * 
 * socket = representa el cliente (singular) que se conecto al servidor
 * 
 */

 io.on("connection", socket =>{
     io.emit("enviar mensaje",{msj:"se ha conectado un nuevo usuario"})
     //socket.emit("") solo a la persona que esta escuchando
     socket.on("recibir mensaje", data=>{
         //guardar data en la base de datos
         // se lo emito a todos los sockets
         io.emmit()//le escribo a todos el mensaje o lo guardo en la base de datos
     })
 })

 io.listen(9000)
const conection = mysql.createConnection({
    host:"",
    user:"",
    port:"",
    password:"",
    database:""
})

conection.query("string consulta", /*callback*/ function())



conection.query("select * from alumnos where id = ?", [1], (err,res)=>{

})

conection.close()



const server = http.createServer((req, res)=>{
    let {url} = req

    res.writeHead(200, {"content-type":"text/html"})
    res.end(template)

    /**
     * 
     */



})


