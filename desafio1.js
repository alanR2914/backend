class Usuario {
    constructor(name, lastName, books, pets){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
    getFullName(){
        console.log(`Hola soy ${this.name} ${this.lastName}`);
    }
    addMascota(pet){
        this.pets.push(pet)
    }
    countMascotas(){
        console.log(this.pets.length);
    }

    addBook (nombre, autor){
        const newBook = {nombre: nombre, autor: autor};
        console.log(newBook);
        this.books.push(newBook);
    }
    getBookNames(){
        let arr = [];
        for (let i = 0; i <= this.books.length -1; i++){
            arr.push(this.books[i].name);
        }
        console.log(arr);
    }
}

const usuario1 = new Usuario("Alan", "Romero", [{nombre:"It", autor: "Stephen King"}], ["Tony","Lucas"]);
console.log(usuario1)
usuario1.addBook("El Senor de los anillos","J.R Tolkien")
console.log(usuario1);
usuario1.getFullName();
usuario1.addMascota("uma");
console.log(usuario1);
usuario1.countMascotas();
usuario1.addBook("Martin Fierro", "Jose Hernandez");
console.log(usuario1);
usuario1.getBookNames();