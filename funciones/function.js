//funciones normales

function finalPrice(price, discount){
    const discountFinal = (price * discount) / 100;
    const priceFinal = price - discountFinal
    return priceFinal
}

let varPrice1 = parseInt(prompt("Ingrese el precio de la prenda"));
let varPercentage1 = parseInt(prompt("Ingrese el descuento a aplicar"))

console.log(finalPrice(varPrice1, varPercentage1));


function finalPrice2(price, discount) {
    const discountFinal = (price * discount) / 100; // Cálculo del descuento
    const priceFinal = price - discountFinal; // Precio después del descuento
    return {
        priceFinal: priceFinal,
        discountFinal: discountFinal
    };
}

// Pedir datos al usuario
let varPrice2 = parseInt(prompt("Ingrese el precio de la prenda"));
let varPercentage2 = parseInt(prompt("Ingrese el descuento a aplicar"));

// Llamar a la función y obtener los valores
const { priceFinal, discountFinal } = finalPrice2(varPrice2, varPercentage2);

// Imprimir resultados
console.log(`El precio final de la prenda es: $${priceFinal}`);
console.log(`El descuento aplicado fue: $${discountFinal}`);


