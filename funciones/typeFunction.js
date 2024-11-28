// // capacidade de las funciones

// //1) Pasar funciones como argumentos o parametro----tambien se le llama --callback--

// function a () {}
// function b (a) {}
// b(a);

// // retornar fuciones

// function a () {
//     function b () {}
//     return b
// }

// // asignar funciones a variables

// const a = function () {}

// // funciones con propiedades y metodos

// function a () {}
// const obj = {}
// a.call(obj);

// // funciones anidadas---- nested function

// function a () {
//     function b (a) {}
// };

// almacenar funciones en objetos

const rocket = {
    name: "falcon",
    launchMessage : function launchMessage () {
        console.log("🎂🎉");
        
    }
}
rocket.launchMessage()

// funciones puras

// Side Efects
//1. modificar variables globales
//2. modificar parametros
//3. solicitudes http
//4. imprimir mensajes en pantalla o consola
//5. manipular el DOM
//6. Obtener la hora actual

// funciones puras

function sum(a, b) {
    return a + b    
}
