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

const arrayNumbersF = [1,2,3,4,5,6,7,8,9];
const pairNumbers = arrayNumbersF.filter(num => num % 2 === 0)
console.log(pairNumbers);

