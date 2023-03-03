var respuesta = prompt("ingrese Y o N").toLowerCase()

if (respuesta==="y" || respuesta==="n") {
    
    document.write("CORRECTO")
} else{
    document.write("incorrecto");
}

function actualizar(){location.reload(true);}
//Función para actualizar cada 5 segundos(5000 milisegundos)
setInterval("actualizar()",1000);
