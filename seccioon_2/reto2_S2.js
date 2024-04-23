const Calificaciones = prompt("Ingrese sus calificaciones separadas por ','");
const NewCalificaciones = Calificaciones.split(",").map(Number);
NewCalificaciones.forEach((i)=>{
    if(i<0 || i>100){
        alert("Calificaciones invalidas");
    }
})
const sumaDeCalificaciones = NewCalificaciones.reduce((acumulador,calificacion) => acumulador+calificacion);
const Promedio = sumaDeCalificaciones/NewCalificaciones.length;
const CalificacionMaxima = Math.max(...NewCalificaciones);
const CalificacionMinima = Math.min(...NewCalificaciones);

const Aprobados= [];
NewCalificaciones.forEach((r)=>{
    if(r>=70){
        Aprobados.push(r);
    }
});

const Reprobados= [];
NewCalificaciones.forEach((r)=>{
    if(r<70){
        Reprobados.push(r);
    }
});

function Orden(a, b) {
    return b - a;
}
const OrdenCalificaciones = NewCalificaciones;
NewCalificaciones.sort(Orden);

console.log(`El promedio de las calificaciones es: ${Promedio}`);
console.log(`La calificacion maxima fue: ${CalificacionMaxima}`);
console.log(`La calificacion minima fue: ${CalificacionMinima}`);
console.log(`La cantidad de estudiantes aprobadus fue: ${Aprobados.length}`);
console.log(`La cantidad de estudiantes reprobados fue: ${Reprobados.length}`);
console.log(`Lista de Calificaciones Ordenadas de Mayor a Menor:
\n${OrdenCalificaciones}`);






