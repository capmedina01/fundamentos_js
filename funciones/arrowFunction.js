// funcion tradicional
const greeting = function (name) {
    return `Hi, ${name}`
}
console.log(greeting("juanjo1"));


// funcion de flecha con retorno explicito
const arrowGreeting = (name) =>{
    return `Hi, ${name}`
}
console.log(arrowGreeting("juanjo2"));

// funcion de flecha con retorno explicito
// se quitan los parentesis ...porque solo hay un parametro
const arrowGreetingImp = name => `Hi, ${name}`;

console.log(arrowGreetingImp("juanjo3"));

const fCharacter = {
    name: "uncle Ben",
    messageUncle: function (message) {
        console.log(`${this.name} says: ${message}`);        
    }
};

// en funciones de flecha el this no es tomado
const fCharacterArrow = {
    name: "uncle Ben",
    messageUncleArrow: message => {
        console.log(`${this.name} says: ${message}`);        
    }
};

fCharacter.messageUncle("a big power")
fCharacterArrow.messageUncleArrow("todo se puede")