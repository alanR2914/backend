const division= (dividiendo, divisor)=>{

}

let promesa = new Promise((resolve, reject) => {
    let condition = false;
    if (condition === true) {
        resolve("operacion completada con exito")
    } else{
        //si hay algun fallo
        reject("hubo un fallo en el servidor")
    }
})
promesa.then((resultado)=>console.log(resultado))
.catch(error=>console.log(error))