const http = require("http")
const fs = require("fs")
/**
 * 
 * 
 * 
 */


const servidor = http.createServer((req,res) =>{

    //es indispensable que una conexion http termine la escritura del socket  con socket.end

// si le podemos enviar la informacion al cliente por stream

res.write("hola")
res.write("mundo")

/**
 * 
 * setTimeout(()=>{
    res.end("!")
}, 3000)
 * 
 */


//mas rapido el end mejor para el cliente
//tiene que estar los heder de content type es el header que se encarga de informar que informacion va a llegar oi porcesar es para el cliente en este caso 

//res.statusCode = 200
//res.setHeader("content-type", "text/html")
res.writeHead(404, "Internal Server Error", {"conent-type":"text/html"})
res.end("<h1>Hola mundo </h1>")

res.end("!")


//////////////
fs.readFile(`${__dirname}/index.html`, (err,data)=>{
    if(err){
        console.err(err)
        res.writeHead(500, "internal server error")
        res.end(err.message)
    } else {
    res.writeHead(200, {"content-type":"text/html"})
    res.end(data)
    }
})

fs.readFile(`${__dirname}/video.mp4`, (err,data)=>{
    if(err){
        console.err(err)
        res.writeHead(500, "internal server error")
        res.end(err.message)
    } else {
    res.writeHead(200, {"content-type":"video/mp4"})
    res.end(data)
    }
})
})

servidor.listen(8070)








