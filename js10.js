palabra=prompt("ingrese una palabra")

//la función split convierte la cadena ingresa en un array
//la función reverse la invierte
//y join une el array a una cadena

function reverse(s){
    return s.split("").reverse().join("");
}

let palabraInvertida = reverse(palabra);

document.write(palabraInvertida);