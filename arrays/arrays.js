// declaracion de arrays

const arrayFruits = ["graper", "pinneapple", "apple"];

const arrayEmpty = [];

const arrayObjects = [{name:"juanjo", age: 1, sex: "M"}]

const arrayMixed = ["graper", "pinneaple",{name:"juanjo", age: 1, sex: "M"},5,7]

const firtsElement = arrayFruits[1];
console.log(firtsElement);

//array size

console.log(arrayMixed.length);

//mutability array

arrayEmpty.push("watermelon")
console.log(arrayEmpty);

//inmutability
const arrayMutable = arrayFruits.concat(arrayObjects)
console.log(arrayMutable);

//checking array
const isArray = Array.isArray(arrayMixed);
console.log(isArray);

//exercises with arrays

const numberArray = [1,2,3,4,5];
let sum = 0

for(var i=0;i<numberArray.length;i++){
    sum = sum + numberArray[i]
    console.log(sum);
    
}

// methods that modify array
// method push()------------ adds an element to the array and return size

const newArray = arrayFruits.push("lemon", "orange");
console.log(arrayFruits);
console.log(newArray);

//method pop()-----------removes the last element and returns the removed element

const removedArray = arrayFruits.pop();

console.log(arrayFruits);
console.log(removedArray);





