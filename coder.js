//Clase 2 entregable
//DATOS

var nombre = prompt("Hola,cual es tu nombre?");
var actual = 2021;
var fecha = parseInt(prompt("ingrese su año de nacimiento?"));
var Obrasocial = prompt("cual es tu Obra Social?");
var especialista = prompt("con que especialista desea tener su consulta?");
var nico
//INFO POR CONSOLA
console.log(
    "El paciente " + nombre + " de " + Number(actual - fecha) + " años,cuenta con la Obra social "+
     Obrasocial + " y necesita visitar a un/a " + especialista );

//CONDICIONALES


if (actual-fecha<18){
    alert("porfavor estar acompañado de un adulto responsable o tutor para tener su consulta!");
}


