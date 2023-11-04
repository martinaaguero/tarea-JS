//1-Suma de Números Pares: Crea un programa que sume todos los números pares en un
//array.

let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaPares = 0;

for(let i = 0 ; i < numerosArray.length ; i++ ) {

if(numerosArray [i] % 2 === 0){
  sumaPares  += numerosArray [i]

console.log ("la suma de todos los numeros par es :" + sumaPares )

}
} 

 //2- Factorial de un numero: Escribe una función que calcule el factorial de un número
//utilizando un bucle


function numFactorial (n){
 
 let resultado = 1;


for(let i = 1 ; i <= n ; i++ ) {

  resultado *= i;
}

return resultado;
}
 
let numero = 5
let resultado = numFactorial(numero)
console.log(`El factorial de ${numero} es ${resultado}`);

//---------------------------------------------------------

//3- filtrar Números Primos: Crea una función que reciba un array de números y devuelva un
//nuevo array que contenga solo los números primos
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];


// 4-Cálculo de Promedio: Crea una función que calcule el promedio de los elementos en un
//array



// 5-Eliminar Duplicados en un Array: Escribe una función que tome un array y elimine los
//elementos duplicados, devolviendo un nuevo array sin duplicados



//6-De una sección existente en tu página, crea un subtitulo atractivo que llame la atención
//del usuario a querer conocer más, así mismo el usuario puede clickear un botón existente y
//que se muestre el texto de dicha sección.


function mostrar (){

let span= document.getElementById ("adicional");

span.className = "visible"


let boton = document.getElementById ("btn");

boton.className = "oculto"
 
}

boton.addEventListener ("click", mostrar);




