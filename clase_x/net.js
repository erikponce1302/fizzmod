const net = require("net")
// en un servidor de tcp recibimos una instancia de net.socket el cual implementa la interfaz de stream duplex, osea que 
//podemos consumirlo y escribirlo

let sockets =[]

const servidor = net.createServer
(socket => {

    //en un servido tcp o http siempre hay que cerra la respuesta del cliente, de lo contrario el mismo queda en timeout
    sockets.push(socket)

    socket.write("estableciendo conexion\n\r")
    socket.write("bienvenido\n\r")
    socket.end("hola mundo")

    socket.on("data",data=>{
        //console.log("consola servidor", data)
        //socket.write(data)
        for (let index; index < sockets.length; index++) {
            const s = sockets[index]
            s.write(data)
        }
    })
})

servidor.listen(8000)

//siempre tengo q devolver una respuesta y cerrarlo sino da timeout
// end es en http

//como concatenar buffer jusntar chunks en array cuando me dan enter 