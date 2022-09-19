const fs = require("fs");

fs.promises.readFile("./archivo.txt", "utf-8").then(contenido=>{
    return contenido
})
.then(nuevoContenido=>{
    fs.promises.writeFile("./nuevoArchivo.txt", nuevoContenido)
})
.then(segundoResultado=>{
    console.log("copia realizada con exito")
})