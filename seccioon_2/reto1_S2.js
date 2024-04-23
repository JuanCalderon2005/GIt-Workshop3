const calificaciones = prompt("Ingrese las calificaciones del estudiante separadas por `,` del [1-100]");

const NewCalificaciones = calificaciones.split(",").map(Number);

let calificacionesValidas = true;

NewCalificaciones.forEach((calificacion) => {
    if (calificacion < 0 || calificacion > 100) {
        calificacionesValidas = false;
    }
});
if (!calificacionesValidas) {
    console.log("¡Alguna calificación no es válida!");
}

const SumatoriaDeNumeros = NewCalificaciones.reduce((acumulador, calificacion)=> acumulador+calificacion,0);
const Promedio = SumatoriaDeNumeros/NewCalificaciones.length
alert(`La sumatoria de las calificaciones es ${SumatoriaDeNumeros} y el promedio de las mismas es ${Promedio}`);