// if anidado
let genero = Number(prompt(`Vamos a validar si tenemos tu talla de zapatos \n\t\tEscribe 1 si quieres validar de mujer\n\t\tEscribe 2 si quieres validar de hombre`));

if (genero == 1){
    let talla1 = Number(prompt(`Vamos a validar tu talla de zapatos de Mujer, escribe tu talla`));
    if (talla1>=32 && talla1<=38)
    console.log(`tu talla es ${talla1}, si tenemos tu talla disponible`);
}
    else {
        if (genero == 2){
            let talla2 = Number(prompt(`Vamos a validar tu talla de zapatos de Hombre, escribe tu talla`));
if (talla2>=39 && talla2<=43) {
    console.log(`tu talla es ${talla2}, si tenemos tu talla disponible`);
}

else {
    console.log(`No tenemos tu talla disponiblela tenemos disponible`);
            }
         }
    }
 