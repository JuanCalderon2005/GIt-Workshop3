let users = {};

function Generador (){
    let NombreCompleto = prompt("Porfavor ingresa tu nombre y apellido");

    let [Nombre,Apellido] = NombreCompleto.toLocaleLowerCase().split(" ");
    
    let usuario = Nombre.slice(0, 3) + Apellido.slice(0, 3);

    let email = `${usuario}@myDomain.com`;

    let count = 0;
    let usuario1 = usuario;
    while (users[usuario]){
        count++;
        usuario = usuario1 + count;
        email = `${usuario}@myDomain.com`;
    };

    users[usuario] = email;

    console.log(`Este es su usuario: ${usuario}`);
    console.log(`Este es su correo: ${email}`);

    alert(`Usuario: ${usuario} Correo: ${email}`);

    let OtroUsuario = confirm("Desea generar otro correo?");
    if (OtroUsuario){
        Generador();
    }else{
        alert("Gracias por tu tiempo :)");
    }
}

Generador();






