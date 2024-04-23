i = true;
const eventos = [];
let countId = 0;

function CrearEvento() {
    let NombreEvento = prompt("Porfavor escriba el nombre de su evento");
    let FechaEvento = prompt("Porfavor escriba la fecha del evento (DD/MM/AAAA)");
    let DescripcionEvento = prompt("Porfavor ingrese una descripcion de su evento");

    Event = {
        id : countId +=1,
        evento : NombreEvento,
        fecha : FechaEvento,
        descripcion : DescripcionEvento,
    }
    eventos.push(Event);

}

function VerEventos() {
    eventos.forEach((Event, index) => {
        console.log(`Evento ${index + 1}: ${Event.evento} - ${Event.fecha} - ${Event.descripcion}`);
    });
}

function BuscarEventosPorNombre() {
    const BuscarNombre = prompt("Ingrese el nombre del evento que desea buscar");
    const FiltList = eventos.filter(Event => Event.evento === BuscarNombre);
    if(FiltList.length === 0){
        console.log("No se encontraron eventos con ese nombre");
    }

    FiltList.forEach((Event, index)=>{
        console.log(`Evento ${index + 1}: ${Event.evento} - ${Event.fecha} - ${Event.descripcion}`);
    })

}

function ActualizacionDeEventos(){
    eventos.forEach((Event, index) => {
        console.log(`Evento ${index + 1}: ${Event.evento} - ${Event.fecha} - ${Event.descripcion}`);
    });

    const IdEvento = prompt("Profavor ingrese el ID del evento que desea actualizar");
    const NewEventName = prompt("Ingrese el nuevo nombre del evento");
    const NewEventFecha = prompt("Ingrese la nueva fecha del evento");
    const NewEventDescripcion = prompt("Ingrese la nueva descripcion del evento");

    if(NewEventName){
        eventos[IdEvento - 1].evento = NewEventName;
    }
    if(NewEventFecha){
        eventos[IdEvento - 1].fecha = NewEventFecha;
    }
    if(NewEventDescripcion){
        eventos[IdEvento - 1].descripcion = NewEventDescripcion;
    }

}

function EliminarEvento() {
    eventos.forEach((Event, index) => {
        console.log(`Evento ${index + 1}: ${Event.evento} - ${Event.fecha} - ${Event.descripcion}`);
    });

    const EliminarEvento = prompt("IÑngrese el ID del evento que desea eliminar");
    eventos.splice(EliminarEvento -1,1);

}

while(i){
    const Menu = prompt(`Por favor ingresa una de las siguientes opciones: 
    \n 1. Crear un evento 
    \n 2. Ver eventos
    \n 3. Buscar eventos por nombre
    \n 4. Actualizar evento
    \n 5. Eliminar evento
    \n 6. Salir`);

    switch(Menu){
        case "1":
            CrearEvento();
            break;
        case "2":
            VerEventos();
            break;
        case "3":
            BuscarEventosPorNombre();
            break;
        case "4":
            ActualizacionDeEventos();
            break;
        case "5":
            EliminarEvento();
            break;
        case "6":
            i = false;
            break;
    }
}