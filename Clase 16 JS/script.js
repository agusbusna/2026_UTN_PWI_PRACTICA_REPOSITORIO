//tipos de datos
//primitivos
//strings
//numbers
//boolean
/* let nombre_1= "pepe"
let nombre_2= nombre_1
nombre_1= "juan"

//cuánto vale nombre_2? si es primitivo, es "pepe"



//objeto
//array


const nombres_1 = ["pepe", "juan", "tobias"]
const nombres_2 = nombres_1

//.push agrega un elemento al final de la lista
nombres_1.push("adrian")

console.log(nombres_2)


 */
//Mutables
//Modifican el array original
//nombres.push('maria')


//Inmutables
//NO modifican el array original
//let indice_pepe = nombres.indexOf('pepe')
//console.log(indice_pepe)

//.push = Agregar un elemento al final de la lista
//nombres.push('maria')
//.pop = Elimina el ultimo elemento de la lista
//nombres.pop()

//.shift = Elimina el primer elemento de la lista

//nombres.shift()

//.unshift = Agrega un elemento al principio de la lista
//nombres.unshift('maria')

//.includes = verifica si x elemento esta en el array
//console.log(nombres.includes('maria'))

//.indexOf = averiguar el indice de un elemento, si no esta devuelve -1
//console.log(nombres.indexOf('pepe1'))

//.splice = eliminar o agregar o suplantar elementos del array

//Eliminar a juan
/* let indice_juan = nombres.indexOf('juan')
nombres.splice(indice_juan, 1) */

//Agregar a alguien donde esta juan
/* let indice_juan = nombres.indexOf('juan')
nombres.splice(indice_juan, 0, 'adrian') */

//Suplantar a juan por adrian
/* let indice_juan = nombres.indexOf('juan')
nombres.splice(indice_juan, 1, 'adrian') */

//agregar antes de juan
/* let indice_posterior_juan = nombres.indexOf('juan') + 1
nombres.splice(indice_posterior_juan, 0, 'adrian')

console.log(nombres) */

/* let nombres = ["pepe", "juan", "maria", "carlos", "jose", "julieta", "ana"]

//Verificar si existe "pedro", en caso de existir decir "Pedro!" por consola
function estaPedro() {
    if (nombres.includes("pedro")){
        console.log("Pedro!")
    }else{
        console.log("Pedro no pertenece a la array")
    }
}

//eliminar a "maria"
let indice_maria = nombres.indexOf("maria")
nombres.splice(indice_maria, 1)

//Reemplazar a "jose" por "josesito"

let indice_jose = nombres.indexOf("jose")
nombres.splice(indice_jose, 1, "josesito")

console.log(nombres)

 */

//FOR OF
//Un bucle para recorrer arrays
/* let nombres = ["pepe", "jose", "maria"]

//Por cada nombre de la lista de nombres ejecutar x bloque de código
for(let nombre of nombres){
    console.log("Hola " + nombre + "!")
} */
/* 
const notas = [90, 40, 100]

//Calcular una funcion llamada calcularPromedio que dado una lista de numeros me devuelva su promedio
//Usar FOR OF para recorrer la lista

function calcularPromedio(numeros){
    let sumaTotal= 0;
    for(let numero of numeros){
        sumaTotal += numero;        
    }
    let promedio= sumaTotal/numeros.length
    
    return promedio
}

console.log(calcularPromedio(notas)) */
/* 
let nombres = ["tv noblex", "tv samsung", "tv noblex"]
let productos= ["coso", "cosito", "piedra", "martillo","coso", "coso"]

function contarNombres(lista, nombreBuscado) {
    let contador = 0
    for (let nombre of lista) {
        if (nombre === nombreBuscado) {
            contador = contador + 1; //contador +=1 // contador ++
        }
    }

    return contador
}
console.log(contarNombres(nombres, "tv noblex"))
console.log(contarNombres(productos, "coso")) */

/* //OBJETOS

const producto = {
    nombre: "tv noblex",
    id: 1,
    precio: 120000,
    categorias: ["Tecnologia", "Hogar"]
}

//Notacion de corchetes
producto["stock"]= 20

//Notacion de puntos
producto.precio= producto.precio +1
 */

    const productos =[
        { nombre: "tv samsung", id: 1,precio: 120000, categorias: ["Tecnologia", "Hogar"]},
        {nombre: "tv noblex",id: 2, precio: 100000, categorias: ["Tecnologia", "Hogar"]},
        {nombre: "tv noblex",id: 3,
            precio: 120000, 
            categorias: ["Tecnologia", "Hogar"]
        },
        {
            nombre: "tv android",
            id: 4,
            precio: 100000, 
            categorias: ["Tecnologia", "Hogar"]
        },
        {
            nombre: "tv sony",
            id: 5,
            precio: 300000, 
            categorias: ["Tecnologia", "Hogar"]
        }
    ]

    //Quiero subir 20000 el precio de la tv noblex (por id, 2)

/*  function subirPrecio (productos, idProducto, precioaSubir){
        for (const producto of productos){
            if (producto.id ===idProducto){
                producto.precio = producto.precio + precioaSubir
                break;
            }
        }
    } */

//TAREA: Funciones, arrays y objetos

//buscarProductoPorId(productos, idBuscado) Buscar un producto por id y retornarlo
function buscarProductoPorId(productos, idBuscado){
    for(const producto of productos){
        if(producto.id ===idBuscado){
            return producto;
        } 
    }
    return console.log("El producto que busca no se encuentra disponible") // return null (puede ser tmb)
}
//buscarProductoPorNombre(productos, nombreBuscado) Buscar un producto por nombre y retornarlo

function buscarProductoPorNombre(productos, nombreBuscado){
    for (const producto of productos){
        if(producto.nombre===nombreBuscado){
            return producto;
        }
    }
    return console.log("El producto que busca no se encuentra disponible")
}
// (Buscador optimizado)
function buscarProductoPorNombre(productos, nombreBuscado){
    for (const producto of productos){
        if(producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())){
            return producto;
        }
    }
    return console.log("El producto que busca no se encuentra disponible")
}


//filtrarPorPrecioMin(productos, precioMin) Filtrar todos los productos que su precio se mayor a cierto numero y devolver la lista
function filtrarPorPrecioMin(productos, precioMin){
    const productosFiltrados=[]
    for(const producto of productos){
        if(producto.precio >= precioMin){
            productosFiltrados.push(producto)
        }
//        if(productosFiltrados >= 10){
//            break;}
    }
    return productosFiltrados
}

//agregarCategoriaAProducto(productos, id, categoria) Agregar categoria (en caso de que no exista)

function agregarCategoriaAProducto(productos, id, categoria){
    for(const producto of productos){
        if (producto.id === id){
            if(!producto.categorias.includes(categoria)){
                producto.categorias.push(categoria)
                return true
            }
            return false
        }
    }
    return false
}


//eliminarProductoPorId(productos, id) Eliminar producto por id

function eliminarProductoPorId(productos, id){
    for(const producto of productos){
        const indice_producto = productos.indexOf(producto)
        if(producto.id=== id){
            productos.splice(indice_producto, 1)
            break;
        }
    }
    return productos
}

function eliminarProductoPorId(productos, id){
    for(
        let i= 0;
        i >= productos.length;
        i = i + 1
    )
    
}
/* let indice_jose = nombres.indexOf("jose")
nombres.splice(indice_jose, 1, "josesito") */


/* console.log(buscarProductoPorNombre(productos, "tv sony")) */

/* console.log(filtrarPorPrecioMin(productos, 100000)) */
/* console.log(agregarCategoriaAProducto(productos, 3,"Jabonn")) */
/* console.log(eliminarProductoPorId(productos, 3))
 */