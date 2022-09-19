class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    addBook (nombre, autor){
        const newBook = {nombre: nombre, autor: autor};
        console.log(newBook);
        this.libros.push(newBook);
    }
}

const usuario1 = new Usuario("Alan", "Romero", [{nombre:"It", autor: "Stephen King"}], ["Tony","Lucas"]);
console.log(usuario1)
usuario1.addBook("El Senor de los anillos","J.R Tolkien")