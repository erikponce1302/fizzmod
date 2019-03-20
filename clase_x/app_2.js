/**
 * stream: el modulo solamente nos da la abstraccion de los streams en las intefaces de sus clases:
 *  la mayoria son stream y van a ser buffer para manipularlos se necesitan los buffers
 * 
 * - writable son solo lectura
 * - readeble son solo escritura
 * - duplex los dos anteriores
 * - transform son de un tipo especial de duplex en donde el output se calcula en base a una transformacion del input
 */

//FyleSystem

const fs = require("fs")

//fs.readFileSync() no usar nunca

/*
fs.readFile(__filename,(err,data) => {
    console.log(data.toString())
}) //es async, envio nombre del archivo, callback
*/


//inicia un stream en modo pausado 

// los streams pueden estan en dos modos: paused o flowing


let archivo = fs.createReadStream(__dirname+"/index.html")
let nuevo = fs.createWriteStream(__dirname+"/output.txt")

// todos los streams de tipo readable tienen el evento "data"
// el evento data de un readable se dispara cuando nos llega un chunk a traves del stream en forma de Buffer
archivo.on("data", chunk => {
    console.log('nuevo chunk:', chunk)
    // todos los streams de tipo writable implementan el metodo write para escribir por stream 
    nuevo.write()


})

//todos los streams del tipo redable implememntan el evento de tipo "end" y se dispara cuando ya no hay mas info para leer


archivo.on("end",() =>{
    nuevo.end()
})
console.log('end')



// net sirve para hacer servidores de conexion por tcp

const net = require("net")
// en un servidor de tcp recibimos una instancia de net.socket el cual implementa la interfaz de stream duplex, osea que 
//podemos consumirlo y escribirlo


const servidor = net.createServer(socket => {

    //en un servido tcp o http siempre hay que cerra la respuesta del cliente, de lo contrario el mismo queda en timeout
    socket.write("estableciendo conexion")
    socket.write("bienvenido")
    socket.end("hola mundo")
})

servidor.listen(8000)

//siempre tengo q devolver una respuesta y cerrarlo sino da timeout
// end es en http














