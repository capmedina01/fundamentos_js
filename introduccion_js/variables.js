
//tipos de datos primitivos
//string
let varString = "hola mundo";
console.log(varString);

//number
let edad = 18;
console.log(edad);

//bolean
let esMayor = true;
console.log(esMayor);

//null
let varNull = null;
console.log(varNull);

let varUndefined = undefined;
console.log(varUndefined);


//complejos
//object
let persona = {
    nombre: "juanjo",
    edad: 1
};
console.log(persona);


// array
let nombres = ["carlos", "juanjo", "juliana"];

console.log(nombres);

saludar();


// funcion
function saludar(){
    console.log("hoooola")
}


//trabajando con string
let saludo = 'Holaaa mundo';
let despedida = "hasta la vista baby";
//string concatenada con comillas invertidas
let combinacion = `${saludo + " " + despedida} `
console.log(combinacion);

console.log(combinacion.length);
console.log(combinacion.toLowerCase());
console.log(combinacion.toUpperCase());
console.log(combinacion.substring(0, 12));
