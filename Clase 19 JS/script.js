/* 
Dada una lista de productos que actuara como estado 
    -   Crear una funcion renderProducts que tomara la lista y la mostrara en pantalla
        Cada producto seguira la sig estructura:
                <div>
                    <h2>Titulo</h2>
                    <div><b>Precio:</b> $precio</div>
                    <div><b>Stock:</b> $stock</div>
                    <button>Eliminar</button>
                    <button>Editar</button>
                </div>
        Si no hay productos decir en un <p>Lista de productos vacia</p>.
        Esta funcion deberia ser invocada una vez asi renderizamos la lista de productos.

    - Crear la funcion setProductos (valor) y al llamarla cambiara el valor del estado y volvera a renderizar la lista de productos
        Para probar este setter podrian llamar a setProductos([]) y en pantalla deberian ver el parrafo indicando que la lista esta vacia
*/

let productos = [
    {
        id: 1,
        titulo: 'Silla oficina',
        precio: 320000,
        stock: 10
    },
    {
        id: 2,
        titulo: 'Escritorio madera',
        precio: 120000,
        stock: 3
    },
    {
        id: 3,
        titulo: 'Alfombra roja',
        precio: 60000,
        stock: 7
    }
]

const lista_productos = document.getElementById('lista-productos')

function renderProductos() {
    let lista_productos_string = ''
    if (productos.length === 0){
        lista_productos_string = '<p>Lista de productos vacia</p>'
    }else {
        for(const producto of productos)
            lista_productos_string = lista_productos_string + `
        <div>
            <h2>${producto.titulo}</h2>
            <div><b>Precio:</b> ${producto.precio}</div>
            <div><b>Stock:</b> ${producto.stock}</div>
            <button>Eliminar</button>
            <button>Editar</button>
        </div>`
    }
    lista_productos.innerHTML = lista_productos_string
}

renderProductos()

function setProductos(valor) {
    productos = valor
    renderProductos()
}

function crearProducto  (titulo, precio, stock){
    const nuevo_producto = {
        id: productos.length +1,
        titulo: titulo,
        precio: precio,
        stock: stock,
    }

    const productos_clonado = [...productos]
    productos_clonado.push(nuevo_producto)
    /* const nueva_lista = [...productos, nuevo_producto] */
    setProductos(productos_clonado)
}

crearProducto("epo", 100, 4)

/* 
Crear una funcion llamada eliminarProductoPorId
    Recibira un id y modificara el estado (mediante el setter) para eliminar el producto con el id recibido, sino existe devolvera null.
*/

function eliminarProductoporId (producto_id){
    const productos_clonado = [...productos]
    let producto_indice = null
    for(const producto of productos_clonado){
        if(producto.id === producto_id){
            producto_indice = productos_clonado.indexOf(producto)
            productos_clonado.splice(producto_indice, 1)
            setProductos(productos_clonado)
        }
    }
    if(producto_indice === null){
        return null
    }
}

