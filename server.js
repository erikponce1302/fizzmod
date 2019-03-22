const http = require("http")


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   var url = req.url;
    if(url === '/users'){
       res.write('listado de usuarios');

       fetch('localhost:8008/usuario', {
        method: 'GET',
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });

    } else if (url === '/users/new'){    
        res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="http://localhost:8008/usuario/nuevo" method="post">
            <p>Nombre</p>    
            <input type="text" name="nombre" /><br />
            <p>Apellido</p>    
            <input type="text" name="apellido" /><br />
            <p>Username</p>    
            <input type="text" name="nombdre_de_usuario" /><br />
            <p>Email</p>    
            <input type="email" name="email" /><br />
                <button>Guardar</button>
            </form>
        </body>
        </html>
    `);
    
    
    
    }else if(url ==='/mensajes'){
       res.write('listado de mensajes');
       //hacer la peticion a la api que lista todos los usuarios
       
       fetch('localhost:8008/mensaje', {
        method: 'GET',
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });

    }
    
    else if (url === '/mensajes/new'){    
        res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="http://localhost:8008/mensaje/nuevo" method="post">
                <input type="text" name="mensaje" /><br />
                <button>Enviar</button>
            </form>
        </body>
        </html>
    `);
    
    
    
    }else{
       res.write('Bienvenido al chat manual');
       res.end(`
       <!doctype html>
       <html>
       <body>
           <form action="/mensajes/new" method="post">
               <button>Crear nuevo mensaje</button>
           </form>
       </body>
       </html>
   
   <!doctype html>
   <html>
   <body>
       <form action="/users/new" method="post">
           <button>Crear nuevo usuario</button>
       </form>
   </body>
   </html>
    `);

    }
    res.end();
   })
   .listen(8000, function(){
    console.log("server start at port 8000"); 
   });