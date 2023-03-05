var texto = prompt("ingrese una oración");

function palabraMasLarga(texto) {
    const palabras = texto.split(" "); // dividir la cadena de texto en palabras individuales
    let palabraMasLarga = ""; // inicializar la variable de la palabra más larga

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        if (palabra.length > palabraMasLarga.length) { // si la palabra actual es más larga que la palabra más larga actual
            palabraMasLarga = palabra; // reemplazar la palabra más larga actual por la palabra actual
        }
    }

    return palabraMasLarga; // devolver la palabra más larga encontrada
}

document.write(palabraMasLarga(texto));