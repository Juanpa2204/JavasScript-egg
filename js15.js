const longitud = 5;
let array1=[];
let array2 = [];

for (let i = 0; i < longitud; i++) {
    let numero = Math.round(Math.random()*10);
    let numero2 =Math.round(Math.random()*10);
    array1.push(numero);
    array2.push(numero2);
}

document.write(array1.join(", "));
document.write("<br>"+array2.join(", "));

