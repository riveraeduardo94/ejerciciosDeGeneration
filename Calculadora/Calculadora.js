console.log("Tarea de calculadora");

const inputA = document.getElementById("A");
const inputB = document.getElementById("B");
console.log(inputA.value, inputB.value);

const botonSumar = document.getElementById("btnSumar");
const botonRestar = document.getElementById("btnRestar");
const botonMultiplicar = document.getElementById("btnMultiplicar");
const botonDividir = document.getElementById("btnDividir");
const inputResultado = document.getElementById("resultado");
const botonLimpiar = document.getElementById("btnLimpiar");

const sumar = (a,b) => a+b;
const restar = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;

botonSumar.addEventListener("click",()=>{
   const valor1 = parseInt(inputA.value);
   const valor2 = parseInt(inputB.value);
   inputResultado.value = sumar(valor1, valor2);
   console.log(sumar(valor1,valor2))
})

botonRestar.addEventListener("click",()=>{
    const valor1 = parseInt(inputA.value);
    const valor2 = parseInt(inputB.value);
    inputResultado.value = restar(valor1, valor2);
    console.log(restar(valor1,valor2))
 })

 botonMultiplicar.addEventListener("click",()=>{
    const valor1 = parseInt(inputA.value);
    const valor2 = parseInt(inputB.value);
    inputResultado.value = multiplicar(valor1, valor2);
    console.log(multiplicar(valor1,valor2))
 })

 botonDividir.addEventListener("click",()=>{
    const valor1 = parseInt(inputA.value);
    const valor2 = parseInt(inputB.value);
    inputResultado.value = dividir(valor1, valor2);
    console.log(dividir(valor1,valor2))
 })

botonLimpiar.addEventListener("click", limpiar);

function limpiar(){
    inputA.value = ""
    inputB.value = ""
}
