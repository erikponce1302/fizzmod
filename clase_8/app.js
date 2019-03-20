const http = require("http")
const Url = require("url")
const fs = require("fs")

const server = http.createServer((req, res) =>{
    //morgan = es un logger
    //http metodo - url lo obtengo desde el request
    //body-parse parsea la data entrada desde el cliente
    //multer

    console.log(Url.parse(url, true))
    let parse_url = Url.parse(url, true)
    console.log(parse_url.query.nombre) // let {nombre} = parse_url.query

    ///////

    let{httpVersion, method, url} = req
    console.log(`HTTP ${httpVersion} - ${method} - ${url}`)
    
    let buffer = []
    let buffer_end

    req.on("data", chunk =>{
        buffer.push(chunk) //puedo usar un spert
    })//es un stream de lectura mismos comportamientos de strem y recibo chunks

    req.on("end", () =>{
        buffer_end = Buffer.concat(buffer)
        console.log(buffer_end.toString())
        buffer = []
    })

    let archivo = fs.createReadStream(__dirname+"/index")
    res.writeHead(200, {"content-type":"text/html"})
    archivo.pipe(res)
    res.end("HOLA MUNDO")
})

server.listen(8000,()=>{
    console.log("servidor Encendido")
})



/*
fetch("localhost" , {
    method: "POST",
    headers: {
        "content-type" : "application/json"
    },
    body: JSON.stringify({x:1})
})
*/

// fetch + header + stringify
// fetch + body + stringify