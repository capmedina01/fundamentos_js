/*
ciclo while
while(condition){
     codigo
}
*/ 

let contador = 0;
let fruits = ["manzana", "coco", "papaya"];

while(contador< fruits.length){
    console.log(`el numero es: ${contador}`)
    console.log(fruits[contador]);
    
    contador ++;
}

contador = 0

do{
    console.log(`el numero es: ${contador}`)
    console.log(fruits[contador]);
    
    contador ++;
}while(contador< fruits.length)