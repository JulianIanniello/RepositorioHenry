function cuidadoConElConsoleLog(nombre) {

console.log(nombre); 
return nombre; //RETORNA EL VALOR Y EL DATO

}

function otraFuncion() {
return(
"El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog("Julian")
);
}

function cuidadoConElReturn(nombre) {
     return nombre;
    console.log(nombre);
}