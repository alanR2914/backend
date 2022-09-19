const fs = require("fs");

//fs.writeFileSync("./archivo.txt", "primer texto")

//const contenido = fs.readFileSync("./archivo.txt","utf-8")
//console.log(contenido)

//agregar contenido
fs.appendFileSync("./archivo.txt", "\ninfo adicional")

//eliminar el archivo
fs.unlinkSync("./archivo.txt")

//try {
//  }