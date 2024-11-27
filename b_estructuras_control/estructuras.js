let numSecret = Math.floor(Math.random()* 10 + 1);

let numUser = parseInt(prompt("Adivina el número del 1 al 10"));

if(numSecret === numUser){
    console.log("Adivinaste el número secreto")
    console.log("el numero secreto es: " + numSecret)
}
else{
    console.log("Intenta otra vez");
    console.log("el numero que ingresaste es: " + numUser)    
}
