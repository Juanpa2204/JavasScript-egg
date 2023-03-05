palabra=prompt("ingrese una palabra")

//la función split convierte la cadena ingresa en un array
//la función reverse la invierte
//y join une el array a una cadena

let invertirPalabra=()=> palabra.split("").reverse().join("");

document.write(invertirPalabra(palabra))
