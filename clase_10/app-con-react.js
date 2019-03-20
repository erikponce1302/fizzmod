const http = require("http").createServer(handler)
const io = require("io")(servidor)
const fs = require("fs")

function handler(req, res){
    let archivo = fs.createReadStream(__dirname+"index-ws.html")
    res.writeHead(200, {"content-type":"text/html"})
    archivo.pipe(res)
}


io.on("connection", socket =>{
    socket.emit("nueva con", {status:"ok", payload:"te conectaste!"})
})

http.listen(8000)