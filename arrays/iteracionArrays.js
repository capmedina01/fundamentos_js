// iteraccion con map() ----permite crear un nuevo array
// y agregarle una funcion que opere en el array original y devuelva en el nuevo array el resultado de la funcion

const numberInteger = [1,3,5,7,9];
const squareNumber = numberInteger.map(num => num * num);
console.log(numberInteger);
console.log(squareNumber);

console.log("-----------------");


// foreach devuelve los valores iterados

const arrayNumbers = [1,2,3,4,5,6];
let sum = 0;

arrayNumbers.forEach(number => {
    sum += number
})

console.log(sum);
console.log(arrayNumbers);

// metodos filter() y reduce()
// filter devuelve lo que se cumpla en la condicionde la funcion

const arrayNumbersF = [1,2,3,4,5,6,7,8,9];
const pairNumbers = arrayNumbersF.filter(num => num % 2 === 0)
console.log(pairNumbers);


// devuelve la suma de los valores del array
const lastNumber = arrayNumbersF.reduce((acumulator,currentValue) => acumulator + currentValue, 0) 
console.log(lastNumber);

//reduce() tambien puede decirnos cuantas veces se repite un valor en un array

// metodo find()---------busca un valor que coincida con la condicion de la funcion

const numbers5 = [1,2,3,4,5];
const numbersFind = numbers5.find(number => number >3)
console.log(numbersFind);

console.log("---------------------");

const words = ["hola", "juanjo", "tierra", "aire"]
const wordFind = words.find(word => word === "juanjo")
console.log(words)
console.log(wordFind);


console.log("---------------------");
//devuelve el indice del elemento buscado

const wordFindIndex = words.findIndex(word => word === "aire")

console.log(words)
console.log(wordFindIndex);

console.log("---------------------");

//metodo slice()-------------devuelve los elementos desde el indice que le indiquemos

const words2 = ["hola", "juanjo", "tierra", "aire"]

console.log(words2.slice(2, 5));
console.log(words2.slice(1, 3));



