var contraseña = prompt("Ingrese una contraseña");

let numcontra = contraseña.length;

function ver1(numcontra){
    if (numcontra < 8) {
        return false;
    }
    return true;
}

function ver2(contraseña){
    var regex = /\d/;
    var veri2 = regex.test(contraseña);
    if (!veri2) {
        return false;
    }
    return true;
}

function ver3(contraseña){
    var regex = /\D/;
    var veri3 = regex.test(contraseña);
    if (!veri3) {
        return false;
    }
    return true;
}

function ver4(contraseña){
    var regex = /\W/;
    var veri4 = regex.test(contraseña);
    if (!veri4) {
        return false;
    }
    return true;
}

function versf() {
    var verificacionesFallidas = [];
    
    if (!ver1(numcontra)) {
        verificacionesFallidas.push("Tiene menos de 8 caracteres");
    }
    if (!ver2(contraseña)) {
        verificacionesFallidas.push("Le falta al menos un número");
    }
    if (!ver3(contraseña)) {
        verificacionesFallidas.push("Le falta al menos una letra");
    }
    if (!ver4(contraseña)) {
        verificacionesFallidas.push("Le falta al menos un caracter especial");
    }

    if (verificacionesFallidas.length > 0) {
        console.log("La contraseña es insegura porque:");
        verificacionesFallidas.forEach(function (mensaje) {
            console.log("- " + mensaje);
        });
    } else {
        alert("Contraseña segura");
    }
}

// console.log(contraseña.length);
// console.log(contraseña);

versf();

