const http = require("http")
const mysql = require("mysql")



const con = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user : "eponce",
    password: "eponce.1302",
    database: "fizzmod"
})

const server = http.createServer((req,res) =>{
    res.write("bienvenido al ABM de Ususarios")
        
        let url = req.url
        console.log(url)
        if(url === '/usuario/'){
            if(req.method === 'GET'){
                con.query("select * from usuarios", (err, resp, fields)=>{
                    if(err){
                        res.writeHead(400, {"content-type":"text-plain"})
                    }
                    console.table(fields)
                    console.table(resp)
                })
            }
            res.end("fin")
        } else if ( url === '/usuario/delete/:id'){
            // elimino el usuario
            let id = req.params
            console.log(id)
            con.query("DELETE FROM usuarios WHERE id = ?", id, (err, resp, fields)=>{
                if(err){
                    resp.writeHead(400, {"content-type":"text-plain"})
                }
            })
            res.end("ok")
        } else if(url === '/usuario/edit/:id'){
            if(req.method === 'PUT'){
                console.log(req)
                
                con.query("UPDATE usuarios SET nombre = ?", (err, resp, fields)=>{
                    if(err){
                        resp.writeHead(400, {"content-type":"text-plain"})
                    }
                })
                res.end("ok")
            }
        } else if (url === '/usuario/nuevo') {
            if(req.method === 'POST'){
                let body = '';
                req.on('data', function(d) {
                    body += d;
                });
                req.on('end', () => {
                    let parsed = JSON.parse(body)
                    let date = new Date()
                    let user  = {
                        nombre: parsed.nombre,
                        apellido: parsed.apellido,
                        nombre_de_usuario: parsed.nombre_de_usuario,
                        email: parsed.email,
                        creado_en: date,
                        actualizado_en: date, 
                        id_status:1
                    };
                    con.query('INSERT INTO usuarios SET', user, (err, resp, fields)=>{
                        if(err){
                            resp.writeHead(400, {"content-type":"text-plain"})
                        }
                        console.table(fields)
                        console.table(resp)
                    })
                    res.end('ok');
                }); 
            }
        } else if(url === '/usuario/activar/:id'){
            let id = req.id
            con.query("UPDATE usuarios SET id_status = 1 WHERE id = ?", id, (err, resp, fields)=>{
                if(err){
                    resp.writeHead(400, {"content-type":"text-plain"})
                }
                console.table(fields)
                console.table(JSON.parse(resp))
            })
            res.end()
        } else if(url === '/usuario/desactivar/:id'){
            let id = req.id
            con.query("UPDATE usuarios SET id_status = 2 WHERE id = ?", id, (err, resp, fields)=>{
                if(err){
                    resp.writeHead(400, {"content-type":"text-plain"})
                }
                console.table(fields)
                console.table(JSON.parse(resp))
            })
            res.end()
        }

        res.end("no estas haciendo nada")
})

con.connect(err =>{
    if(err){
        console.error(err)
    }
    console.log("se levanto el servidor web")
    
})

server.listen(8008, ()=>{
    console.log("se levanto el servidor")
})