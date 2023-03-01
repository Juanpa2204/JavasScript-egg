ISBN = prompt("ingrese el isbn");
titulo = prompt("ingrese el nombre del libo");
autor = prompt("ingrese el nombre del autor");
numPag = prompt("ingrese el numero de paginas");

function CrearLibro(ISBN, titulo, autor, numPag) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
    this.mostrarLibro=mostrarLibro;
    
}

function mostrarLibro(ISBN,titulo,autor,numPag) {
    let resultado = `Las propiedades son ISBN=${this.ISBN} titulo=${this.titulo} autor=${this.autor} numero de paginas=${this.numPag}`;
    document.write(resultado);
}

let miLibro = new CrearLibro(ISBN, titulo, autor, numPag);

mostrarLibro(ISBN,titulo,autor,numPag);
