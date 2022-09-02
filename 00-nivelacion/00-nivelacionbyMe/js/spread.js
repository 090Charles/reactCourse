//Spread operator

const frutas = ["manzana", "uva", "melon"];
const citricos = ["naranja", "limon", "toronja"];
document.write(frutas,citricos);
document.write("<br>");

const nuevo = [...frutas, ...citricos];
document.write("<br>");

document.write(nuevo);



