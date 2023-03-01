let radio = prompt("ingrese el valor del radio de la circunferencia")

function calculoArea(radio){
   let area = Math.PI * Math.pow(radio,radio)
   document.write("el area de la circunferencia es de " + area);
}

calculoArea(radio);

perimetro = 2 * PI * radio 