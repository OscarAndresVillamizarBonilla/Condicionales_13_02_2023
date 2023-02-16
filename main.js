//if condicional
// en el if condicional ya se tiene una opcion adicional en la cual se debe de cumplir una 
// caracteristica o condicion para obtener una respuesta u otra

let edad = Number(prompt("Escribe tu edad para poder validar tu entrada al establecimiento"))
if (edad>=18) {
console.log(`Tienes ${edad} años, eres mayor de edad, puedes ingresar`);
}
    else{
        console.log(`Tienes ${edad} años, no eres mayor de edad, no puedes ingresar`);
    }
