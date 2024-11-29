/**
 * closure: funcion que tiene acceso a variables de un ambito externo,
 *          incluso cuando esa funcion haya terminado de ejecutarse.
 * 
 * Ambito lexico: cada vez que se declara una funcion crea su propio ambito lexico,
 *                y puede acceder a las variables dentro de ese ambito y a variables
 *                de ambitos superiores.
*/

function outerFunction () {
    let messageFunction = "Juanjo se va ir a dormir"

    function innerFunction () {
        console.log(messageFunction);        
    }
    return innerFunction
}
const closureExample = outerFunction()
closureExample()

function outerClosure () {
    let messageFunction = "Se va ir a dormir"

    function innerClosure (name) {
        console.log(`${messageFunction} ${name}`);        
    }
    return innerClosure
}

const closureA = outerClosure();
const closureB = outerClosure();
closureA("juanjo");
closureB("juliana");

