const sumar = (num1,num2)=>num1+num2;
const multiplicar = (num1,num2)=>num1*num2;

const funcionPrincipal = (numero1, numero2, callback)=>{
    //otro codigo
    return callback(numero1, numero2)
}

console.log(funcionPrincipal(2, 4, sumar));
console.log(funcionPrincipal(2, 4, multiplicar));

//callback para procesos complejos
const notificacion= ()=> console.log("Se apago");

const funcionCompleja = (callback)=>{
    setTimeout(() => {
    //ejecutando muchas operaciones
        callback()
    },5000)


}
console.log(funcionCompleja(notificacion));
console.log("se va a apagar")

let arr = [1, 2, 3]
arr[20] = "hello"
console.log(arr.length)