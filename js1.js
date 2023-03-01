const input = document.querySelector(".variante");
const mensaje = document.querySelector(".resultado");

function btn() {
    const clima = "el dia de hoy esta "+ (input.value);
    mensaje.value = clima;
}