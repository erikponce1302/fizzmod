/*
Primitivos (string-number-boolean-null-undefinid)
Objetos (object-array-function)

web api mozilla
*/

let a = {}

function persona(){
    console.log(this)
}

persona() //window{}

/*
function.call()
function.apply()
function.bind()
function.new()
*/

/*
Contexto: El contexto de una funcion, en las lineas generales, 
nos va a dar una referencia de que objeto contiene esa funcion y esta en la variable this.
No es estatico y puede variara por lugar de ejecucion o desicion del programador
*/


function ctx(a,b){
    console.log('paramtros', a,b)
    console.log('contexto',this)
    console.log('******')
}

ctx(1,2)                                // 1 2 window{}
ctx.call({ctx: 'call'}, 10,20 )         //10  20 contexto call
ctx.apply({ctx:"apply"}, [100, 200])    //ejecuta la funcion en la linea que aparece 

//call y apply ejecutan la funcion 
ctx.bind({ctx:"bind"}, 100 , 200)                   // la deja en standby para cuando la necesite usar, 
                                                    //retorna la definicion de la funcion

function foo(a,b){
    console.log(a,b)
}

document.addEventListener("click", foo.bind(null, 1,2))


//new ejecuta la funcion que tiene al lado reasignandole contexto con un objeto vacio. 
//Al finalizar la ejecucion de la funcion , retorna ese objeto que creo

new ctx //siempre va a generar un objeto nuevo

new ctx(1,2)


let a = {}
ctx.call(a)
return a 

/**
 * 
 * closure: es el espacio que se reserva en una funcion donde se define otra funcion
 */


 function externa(x){
     console.log(x)
     return function interna(y){
         console.log(y)
     }
 }

 let retorno = externa(10)
retorno(20)


youtube source decoded