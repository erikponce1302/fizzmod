const http = require("http")
const fs = require("fs")
/**
 * 
 * 
 * 
 */


const servidor = http.createServer((req,res) =>{
        let archivo = fs.createReadStream(`${__dirname}/vide.mp4`)
        res.writeHead(200, {"conten-type":"video/mp4"})
        archivo.pipe(res)

    })

servidor.listen(9000)








