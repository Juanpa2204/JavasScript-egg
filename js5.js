
numero1= prompt("ingrese un numero");
numero2 = prompt("ingrese otro numero")

opc = prompt(`ingrese:
    S o s para suma
    R o r para resta 
    M o m para Multiplicar
    D o d para dividir`).toLowerCase()

    let respuesta;

switch (opc) {
    case "s":
        respuesta= +numero1+(+numero2);
        document.write("la suma de los números es: " + respuesta);
        break;
    case "r":
        respuesta=+numero1-(+numero2);
        document.write("la resta de los números es: " + respuesta);
        break;
    case "m":
        respuesta=+numero1*(+numero2);
        document.write("la multiplicación de los números es: " + respuesta);
        break;
    case "d":
        respuesta=+numero1/(+numero2);
        document.write("la division de los números es: " + respuesta);
        break;
}
