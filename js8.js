let numeros = [];
let numero = null;

while (numero !== 0) {
    numero = parseInt(prompt("Ingrese un número entero (0 para finalizar): "));
    numeros.push(numero); //push agrega numero al array numeros
}

// Eliminar el último número ingresado para que no altere los resultados de maximo y minimo.
numeros.pop();

//Los tres puntos (...) antes del nombre de un array es el operador de propagación 
//Este operador se utiliza para descomponer un array en una lista de elementos individuales.
let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);
let promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;

document.write("El máximo número ingresado es: " + maximo)
document.write("<br>El mínimo número ingresado es: " + minimo) 
document.write("<br>El promedio de los números ingresados es: "+promedio)

