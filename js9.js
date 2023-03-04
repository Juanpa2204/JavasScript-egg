
let palabra=prompt("ingrese un palabra")
let palabraNueva="";

for (let i = 0; i < palabra.length; i++) {
    palabraNueva += palabra.substring(i,i+1)+" ";
}
document.write(palabraNueva);