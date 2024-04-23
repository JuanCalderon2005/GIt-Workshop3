let correo = prompt("Ingrese un correo")

let email = correo.split("");

let VerArr = email.filter((ver1) => ver1 == "@");
let VerPunt = email.filter((ver1) => ver1 == ".");
let aRR = email.indexOf("@");
let Punt = email.indexOf(".");
let espacio = email.includes(" ");

if (VerArr.length == 1 && VerPunt.length == 1 && aRR < Punt && aRR + 1 != Punt && !espacio){
    alert("Correo valido");
}else{
    alert("Correo invalido");
}

// console.log(VerArr);
// console.log(VerPunt);
// console.log(aRR);
// console.log(Punt);
// console.log(espacio);



