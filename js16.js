const longitud = 5;
let array1=[];

for (let i = 0; i < longitud; i++) {
    let numero = Math.round(Math.random()*10);
    array1.push(numero);
}

document.write(array1.join(", "));

array1.splice(array1.length-2,2)

document.write("<br>"+array1.join(", "));