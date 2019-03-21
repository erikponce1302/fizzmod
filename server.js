const http = require("http")


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   var url = req.url;
    if(url === '/users'){
       res.write('listado de usuarios');

       fetch('localhost:8008/users', {
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
                <input type="text" name="name" /><br />
                <input type="number" name="age" /><br />
                <input type="text" name="username" /><br />
                <input type="text" name="email" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
    `);
    
    
    
    }else if(url ==='/mensajes'){
       res.write('listado de mensajes');
       //hacer la peticion a la api que lista todos los usuarios
       
       fetch('localhost:8008/mensajes', {
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

    }else{
       res.write('Bienvenido al chat manual');
    }
    res.end();
   })
   .listen(8000, function(){
    console.log("server start at port 8000"); 
   });