
let productos = [];
count = 0;
function CreaciionDeProducto() {
    let NombreProducto = prompt("Ingrese el nombre de su producto");
    let PrecioProducto = prompt("Ingrese el precio de su producto");
    let CantidadProducto = prompt("Ingrese la cantidad del producto");
    let DescripcionDeProducto = prompt("Ingrese la descripcion del producto");
    //productos = [{Pr}]
    let Producto = {
        id: count += 1,
        Producto: NombreProducto,
        Precio: PrecioProducto,
        Cantidad: CantidadProducto,
        Descripcion: DescripcionDeProducto,
    };

    productos.push(Producto);

    productos.forEach((Producto, index) => {
        console.log(`Producto ${index + 1}: ${Producto.Producto}-${Producto.Precio}-${Producto.Cantidad}-${Producto.Descripcion}`)
    });
}

function DuplicacionDeProductos() {

    let SeletProductoDuplic = prompt("Seleccione el ID del producto a duplicar");

    SeletProductoDuplic = parseInt(SeletProductoDuplic);

    let productoEncontrado = productos.filter(i => i.id === SeletProductoDuplic);

    productoEncontrado.forEach((i) => {
        let CopiaProducto = {
            id: i.id + 1,
            Producto: i.Producto + "copy" + i.id,
            Precio: i.Precio,
            Cantidad: i.Cantidad,
            Descripcion: i.Descripcion,
        }

        productos.push(CopiaProducto);
    })

    productos.forEach((Producto, index) => {
        console.log(`Producto ${index + 1}: ${Producto.Producto}-${Producto.Precio}-${Producto.Cantidad}-${Producto.Descripcion}`)
    });
}

function ActualizarProductos() {
    const IdEvento = prompt("Profavor ingrese el ID del producto que desea actualizar");
    const NewProductName = prompt("Ingrese el nuevo nombre del producto");
    const NewProductPrecio = prompt("Ingrese el precio del producto");
    const NewProductCantidad = prompt("Ingrese la cantidad del producto");
    const NewProductDescripcion = prompt("Ingrese la descripcion del producto");

    if (NewProductName) {
        productos[IdEvento - 1].Producto = NewProductName;
    }
    if (NewProductPrecio) {
        productos[IdEvento - 1].Precio = NewProductPrecio;
    }
    if (NewProductCantidad) {
        productos[IdEvento - 1].Cantidad = NewProductCantidad;
    }
    if (NewProductDescripcion) {
        productos[IdEvento - 1].Descripcion = NewProductDescripcion;
    }

    productos.forEach((Producto, index) => {
        console.log(`Producto ${index + 1}: ${Producto.Producto}-${Producto.Precio}-${Producto.Cantidad}-${Producto.Descripcion}`)
    });
}

function EliminarProductos() {
    const EliminarProducto = prompt("Ingrese el id del producto a eliminar");
    productos.splice(EliminarProducto - 1, 1);

    productos.forEach((Producto, index) => {
        console.log(`Producto ${index + 1}: ${Producto.Producto}-${Producto.Precio}-${Producto.Cantidad}-${Producto.Descripcion}`);
    });
}

function Verificacion1() {
    const ver1 = prompt("Ingrese el nombre del producto a verificar");
    const cantidadRequerida = parseInt(prompt("Ingrese la cantidad que necesita del producto"));

    if (ver1 && !isNaN(cantidadRequerida) && cantidadRequerida > 0) {
        const producto = productos.find(i => i.Producto === ver1);

        if (producto) {
            console.log(`El producto ${ver1} Existe`);
            if (producto.Cantidad >= cantidadRequerida) {
                console.log(`La cantidad requerida de ${ver1} es suficiente en el inventario`);
                return true;
            } else {
                console.log(`La cantidad requerida de ${ver1} No es suficiente en el inventario`);
                return false;
            }
        } else {
            console.log("Porfavor ingrese un nombre valido o una cantidad valida");
            return false;
        }
    }
}

function VenderProducto() {
    const productoVenta = prompt("Ingrese el producto que desea vender");
    const cantidadVenta = parseInt(prompt("Ingrese la cantidad del producto a vender"));

    if (productoVenta && !isNaN(cantidadVenta) && cantidadVenta > 0) {
        const producto = productos.find(i => i.Producto === productoVenta);

        if (producto) {
            if (producto.Cantidad >= cantidadVenta) {
                producto.Cantidad -= cantidadVenta;
                console.log(`Vendiste: ${cantidadVenta} unidades del producto: ${productoVenta}`);
                console.log(`Quedan ${producto.Cantidad} unidades disponibles en el inventario`);
                return false;
            } else {
                console.log(`No hay suficientes unidades de ${productoVenta} en el inventario`);
                return false;
            }
        } else {
            console.log(`El producto ${productoVenta} no existe`);
            return false;
        }
    } else {
        console.log("Ingrese un producto valido y una cantidad valida");
        return false;
    }
}

function CompraProducto() {
    const productoCompra = prompt("Ingrese el producto que desea Comprar");
    const cantidadCompra = parseInt(prompt("Ingrese la cantidad del producto a comprar"));

    if (productoCompra && !isNaN(cantidadCompra) && cantidadCompra > 0) {
        const producto = productos.find(i => i.Producto === productoCompra);

        if (producto) {
            if (producto.Cantidad >= cantidadCompra || producto.Cantidad <= cantidadCompra) {
                producto.Cantidad += cantidadCompra;
                console.log(`Compraste: ${cantidadCompra} unidades del producto: ${productoCompra}`);
                console.log(`Tienes ${producto.Cantidad} unidades disponibles en el inventario`);
                return false;
            }
        } else {
            console.log(`El producto ${productoCompra} no existe`);
            return false;
        }
    } else {
        console.log("Ingrese un producto valido y una cantidad valida");
        return false;
    }

    productos.forEach((Producto, index) => {
        console.log(`Producto ${index + 1}: ${Producto.Producto}-${Producto.Precio}-${Producto.Cantidad}-${Producto.Descripcion}`)
    });
}

function ValorTotalInventario() {
    let sumPrecio = 0;
    productos.forEach((producto) => {
        sumPrecio += producto.Precio * producto.Cantidad;
    })
    console.log(`El valor total de nuestro inventario es ${sumPrecio}`);
}

function OrdenarProductos() {
    const ComoOrdenar = prompt("Como desea ordenar los productos (nombre, precio, cantidad, descripcion)");
    const orden = prompt("En que orden quiere organizar los productos (ascendente o descendente)");

    let Ordenamiento = productos.slice().sort((a, b) => {
        let comparasion;
        if (orden === `asc`) {
            comparasion = 1;
        } else {
            comparasion = -1;
        }

        if (a[ComoOrdenar] > b[ComoOrdenar]) {
            return comparasion;
        } else {
            return -comparasion;
        }
    })

    console.log(`Los productos ordenados por ${ComoOrdenar} en orden ${orden}:`);
    Ordenamiento.forEach((i) => {
        console.log(i);
    });
}

function identificarMalasPalabras() {
    const MalasPalabras = ['malparido', 'hp', 'mierda', 'estupido', 'malnacido'];
    const reemplazo = "*";

    const blacklistedProducts = [];

    productos.forEach(producto => {
        const descripcion = (producto.Descripcion || "").toLowerCase();
        let tieneMalaPalabra = false;

        MalasPalabras.forEach(palabra => {
            if (descripcion.includes(palabra)) {
                producto.Descripcion = descripcion.replace(new RegExp(palabra, 'ig'), reemplazo.repeat(palabra.length));
                tieneMalaPalabra = true;
            }
        });

        if (tieneMalaPalabra) {
            blacklistedProducts.push(Object.assign({}, producto));
        }
    });

    console.log("Productos con posibles malas palabras en la descripción:");
    blacklistedProducts.forEach(producto => {
        console.log(producto);
    });

    return blacklistedProducts;
}

function GenerarReporte() {
    const CantidadDeProductos = productos.length;
    const valorTotalDeInventario = productos.reduce((total, producto) => total + producto.Precio * producto.Cantidad, 0);
    const ProductosOrdenadosPorPrecio = [...productos].sort((a, b) => a.Precio - b.Precio);
    const ProductosOrdenadosPorCantidad = [...productos].sort((a, b) => a.Cantidad - b.Cantidad);
    const PrecioMasCaro = ProductosOrdenadosPorPrecio[ProductosOrdenadosPorPrecio.length - 1].Precio;
    const CantidadDeProductosMasCaros = ProductosOrdenadosPorPrecio.filter(i => i.Precio === PrecioMasCaro).length;
    const PrecioMasBarato = ProductosOrdenadosPorPrecio[0].Precio;
    const CantidadDeProductosMasBaratos = ProductosOrdenadosPorPrecio.filter(i => i.Precio === PrecioMasBarato).length;
    const CantidadMayorCantidad = ProductosOrdenadosPorCantidad[ProductosOrdenadosPorCantidad.length - 1].Cantidad;
    const CantidadDeProductosMayorCantidad = ProductosOrdenadosPorCantidad.filter(i => i.Cantidad === CantidadMayorCantidad).length;
    const CantidadMenorCantidad = ProductosOrdenadosPorCantidad[0].Cantidad;
    const CantidadDeProductosMenorCantidad = ProductosOrdenadosPorCantidad.filter(i => i.Cantidad === CantidadMenorCantidad).length;

    const CantidadProductosConMalasP = identificarMalasPalabras().length;

    console.log("Reporte de productos:");
    console.log(`- Cantidad de productos: ${CantidadDeProductos}`);
    console.log(`- Valor total del inventario: ${valorTotalDeInventario}`);
    console.log(`- Cantidad de productos más caros: ${CantidadDeProductosMasCaros}`);
    console.log(`- Cantidad de productos más baratos: ${CantidadDeProductosMasBaratos}`);
    console.log(`- Cantidad de productos con mayor cantidad disponible: ${CantidadDeProductosMayorCantidad}`);
    console.log(`- Cantidad de productos con menor cantidad disponible: ${CantidadDeProductosMenorCantidad}`);
    console.log(`- Cantidad de productos con posibles malas palabras en la descripción: ${CantidadProductosConMalasP}`);

    return {
        CantidadDeProductos,
        valorTotalDeInventario,
        CantidadDeProductosMasCaros,
        CantidadDeProductosMasBaratos,
        CantidadDeProductosMayorCantidad,
        CantidadDeProductosMenorCantidad,
        CantidadProductosConMalasP,
    };
}



while (true) {
    const opcion = prompt(`Ingrese el número de la operación que desea realizar:
    \n0. Salir
    \n1. Crear producto
    \n2. Duplicar producto
    \n3. Actualizar producto
    \n4. Eliminar producto
    \n5. Verificar producto
    \n6. Vender producto
    \n7. Comprar producto
    \n8. Valor total del inventario
    \n9. Ordenar productos
    \n10. Identificar productos con malas palabras
    \n11. Generar reporte`);

    switch (opcion) {
        case '1':
            CreaciionDeProducto();
            break;
        case '2':
            DuplicacionDeProductos();
            break;
        case '3':
            ActualizarProductos();
            break;
        case '4':
            EliminarProductos();
            break;
        case '5':
            Verificacion1();
            break;
        case '6':
            VenderProducto();
            break;
        case '7':
            CompraProducto();
            break;
        case '8':
            ValorTotalInventario();
            break;
        case '9':
            OrdenarProductos();
            break;
        case '10':
            identificarMalasPalabras();
            break;
        case '11':
            GenerarReporte();
            break;
    }

    if (opcion === '0') {
        break;
    }
}
