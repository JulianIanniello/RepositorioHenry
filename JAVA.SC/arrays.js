//var listaDeCompras = [];
//listaDeCompras[3] = "Tomate";
//listaDeCompras[1] = "Lechuga";

//console.log(listaDeCompras.length);

//var elementosDelArray = listaDeCompras[3];
//console.log(elementosDelArray);

//.length saber cuantos elementos tiene el Array

//var colores = ["amarillo", "azul"]; //Base
//colores.push("rojo"); //Ultimo
//colores.unshift("verde"); //Primero
//colores.pop(); //Elimina el ultimo
//colores.shift(); //Elimina el primero
//console.log(colores); //Mostrar

//var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"]
//var incluyeDali = pintores.includes("Monet"); //Cuando se consulta debe ser tal cual escrito si no tira falso.
//console.log(incluyeDali);

//var numeros =[8, 6, 7, 9];
//var cumpleCondicion = numeros.every((num) => {return num > 5}); //Pregunta logica si todos los numeros cumplen la condicion.
//console.log(cumpleCondicion);


//var palabra = "Henri";
//var palabraSeparada = palabra.split(""); //Separa cada caracter de la palabra. // si es (" ") separa en cada espacio // si es ("a") separa por cada vez que encuentre esa letra, tambien convierte el string en ARRAY.
//palabraSeparada.pop(); // Quita la i
//palabraSeparada.push("y"); // Agrega la y
//console.log(palabraSeparada);
//var palabraArreglada = palabraSeparada.join(""); //Junta toda la palabra separada, junta el ARRAY y lo vuelve un string.
//console.log(palabraArreglada);
 
var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num)); //Muestra los numeros separados
//numeros.forEach((num) => {if (num === 3){console.log(num)}}); //Muestra con la condicion impuesta en este caso que sea igual a 3

var masUno = numeros.map(num => {return num + 1}); //Como imponerle una condicion de suma o resta o lo que sea a un ARRAY
console.log(masUno);

