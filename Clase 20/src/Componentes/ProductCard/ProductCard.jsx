import "./ProductCard.css"
function ProductCard (propiedades) {
    console.log ("propiedades de product card son", propiedades)
    
    let badge_producto_caro = null 
    if(propiedades.price > 50000){
        badge_producto_caro = <span>Ojo, producto muy caro</span>
    }
    return (
        <div className={'product-card ' + (propiedades.isOnlyForMembers ? 'product-card--only-members' : '')}>
            <h2>{propiedades.title}</h2>
            <p>{propiedades.description}</p>
            <div>Precio: ${propiedades.price} ARS</div> 
            {false}
            {
                propiedades.price < 50000 
                &&
                <span>Ojo, producto muy barato</span>

            }
            {badge_producto_caro}
            {
            propiedades.isOnlyForMembers
            ?
            <div>
                <span>No disponible</span>
                <button>Suscribite para acceder a los beneficios</button>
            </div>
            : <button>Comprar</button>    
            }    
            <hr />
        </div> 
    )
}

export default ProductCard