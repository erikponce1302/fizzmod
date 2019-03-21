/**
 * express : framework de nodejs para generar rutas 
 * cors: cross origin resource sharing - es una polotica de seguridad de internet
 * 
 * los pedidos externos son solo por get post headers
 * 
 * las respuestas tienen que venir con el header access-control-allow-origin
 * 
 * middeleware: es una funcion que se ejecuta antes de su destino
 * 
 * redux: cuando yo despacho una affcion y el reduxe me da un estado de la app no puedo hace run pedido por ajax
 * 
 */


 const express = require("express")

 const app = express()

 app.listen(8000, ()=>{
     console.log("servidor web levantado")
 })