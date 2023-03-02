let radio = prompt("ingrese el valor del radio de la circunferencia")

function calculoArea(){
   let area = Math.PI * Math.pow(radio,radio)
   document.write("el area de la circunferencia es de " + area);
}

function calculoPerimetro(){
   let perimetro = 2 * Math.PI * radio;
   document.write("<br>el perimetro de la circunferencia es de " + perimetro);
}

calculoArea();
calculoPerimetro();