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


        let url = req.url
        if(url === '/usuarios/'){
            con.query("select * from alumnos", (err, resp, fields)=>{
                if(err){
                    resp.writeHead(400, {"content-type":"text-plain"})
                }
                console.table(fields)
                console.table(JSON.parse(resp))
            })
            resp.end("ok")
        } else if ( url === '/usuario/delete/:id'){
            // elimino el usuario
            let id = req.id
            con.query("DELETE FROM usuarios WHERE id = ?", id, (err, resp, fields)=>{
                if(err){
                    resp.writeHead(400, {"content-type":"text-plain"})
                }
                console.table(fields)
                console.table(resp)
            })
            resp.end("ok")
        } else if(url === '/usuario/edit/:id'){
            
            con.query("UPDATE alumnos SET", (err, resp, fields)=>{
                if(err){
                    resp.writeHead(400, {"content-type":"text-plain"})
                }
                console.table(fields)
                console.table(JSON.parse(resp))
            })
            resp.end()
        } else if (url === '/usuario/nuevo'){
            if(req.method === 'POST'){

                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                
                req.on('end', () => {
                    let parsed = JSON.parse(body)
                    
                    con.query('INSERT INTO alumnos SET', parsed, (err, resp, fields)=>{
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
            
        } else if(url === '/usuario/desactivar/:id'){
            
        }
        
        
})
con.connect(err =>{
    if(err){
        console.error(err)
    }
    console.log("se levanto el servidor web")
    server.listen(8008, ()=>{
        console.log("se levanto el servidor")
    })
})