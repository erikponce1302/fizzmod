const http = require("http")
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'eponce1302',
  database: 'fizzmod'
});


const server = http.createServer((req,res) =>{
  res.write("bienvenido al ABM de Mensajes")
  
      let url = req.url
      if(url === '/mensaje/'){
          con.query("select * from mensajes", (err, resp, fields)=>{
              if(err){
                  resp.writeHead(400, {"content-type":"text-plain"})
              }
              console.table(fields)
              console.table(JSON.parse(resp))
          })
          resp.end("ok")
      } else if(url === '/mensaje/leido/:id'){
          
          con.query("UPDATE alumnos SET", (err, resp, fields)=>{
              if(err){
                  resp.writeHead(400, {"content-type":"text-plain"})
              }
              console.table(fields)
              console.table(JSON.parse(resp))
          })
          resp.end()
      } else if (url === '/mensaje/nuevo') {
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
          let id = req.id
          con.query("UPDATE alumnos SET id_status = 1 WHERE id = ?", id, (err, resp, fields)=>{
              if(err){
                  resp.writeHead(400, {"content-type":"text-plain"})
              }
              console.table(fields)
              console.table(JSON.parse(resp))
          })
          resp.end()
      } else if(url === '/usuario/desactivar/:id'){
          let id = req.id
          con.query("UPDATE alumnos SET id_status = 2 WHERE id = ?", id, (err, resp, fields)=>{
              if(err){
                  resp.writeHead(400, {"content-type":"text-plain"})
              }
              console.table(fields)
              console.table(JSON.parse(resp))
          })
          resp.end()
      } 
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });


server.listen(8000, ()=>{
    console.log('el user escucha por el 8888')
})