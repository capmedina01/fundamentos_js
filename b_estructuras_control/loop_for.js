/* itera sobre arrays y strings
ciclo for
for(variable; condition; increment){
    codigo a ejecutar
      
}
     */

let fruitList = ["manzana", "coco", "pera"];

for(var i=0; i<fruitList.length;i++){

    let fruta = fruitList[i];
    switch(fruta){
        case "manzana":
            console.log("4 manzanas")
            break;
        case "papaya":
            console.log("2 papayas")
            break; 
            
        default: console.log("no hay " + fruta)
    
    }
}

/* itera sobre arrays y strings
ciclo for of
for(variable de objeto){
    codigo a ejecutar
     
}
     */

let fruits = ["manzana", "coco", "papaya"];

for(fruta of fruits){
    
    switch(fruta){
        case "manzana":
            console.log("4 manzanas")
            break;
        case "papaya":
            console.log("2 papayas")
            break; 
            
        default: console.log("no hay " + fruta)
    
    }
}

/* itera sobre objetos
ciclo for in
for(variable in objeto){
    codigo a ejecutar     
}
     */

let shopList = {
    huevos: 10,
    manzanas: 5,
    tomate: 3,
    aguacate: 7
};

for(articulo in shopList){
    console.log(articulo);
};

for(articulo in shopList){
    console.log(`${articulo} : ${shopList[articulo]}`);
};



