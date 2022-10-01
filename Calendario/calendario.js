console.log("Ejercicio de calendario");

const inputDia = document.getElementById("dia");
const inputMes = document.getElementById("mes");
const inputAnio = document.getElementById("anio");
const outputResultado = document.getElementById("resultado"); //Declaraciones conocerse :0

function calculate(dia, mes, anio) { //Función click 
    const readInput = (id)=>document.getElementById(id).value;
     console.log(inputDia.value);
     console.log(inputMes.value);
     console.log(inputAnio.value);  //Funcionalidad de botón :3

const fecha = new Date( `${inputMes}/${inputDia}/${inputAnio.value}` ); //Da formato porqué ya conoces las fechas :2
let day = fecha.getDay();  

console.log(fecha);
console.log(day);

switch (day) { //¡Conviertelo en algo!
    case 0 : outputResultado.value = "Domingo no laborable"
        break;
    case 1 : outputResultado.value = "Lunes laborable"  
        break;
    case 2 : outputResultado.value = "Martes laborable"  
        break;
    case 3 : outputResultado.value = "Miercoles laborable"  
        break;
    case 4 : outputResultado.value = "Jueves laborable"  
        break;
    case 5 : outputResultado.value = "Viernes laborable"  
        break;
    case 6 : outputResultado.value = "Sábado no laborable"  
        break;
    default:
        break;

        
   }
   

}

