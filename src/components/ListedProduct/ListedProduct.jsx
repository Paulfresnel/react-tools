import './ListedProduct.css'

function ListedProduct(props){
    const {jsonProducts, cartValue, setCartValue, productsInCart, setProductsInCart} = props
    const copyOfProducts = [...jsonProducts]
    const copyOfProductsInCart = [...productsInCart]

    const addToCart = (event)=>{
        const targetId = event.target.value
       let productToAdd = copyOfProducts.filter(product=>{
       return product.id === targetId
       })
       let priceToAdd = productToAdd[0].price *1
        console.log(priceToAdd)
        if (cartValue === 0){
            setCartValue(priceToAdd)
            copyOfProductsInCart.push(productToAdd)
            setProductsInCart(copyOfProductsInCart[0])
        }
        else{
            setCartValue(cartValue+priceToAdd)
            console.log(copyOfProductsInCart)
            if(copyOfProductsInCart.some(product=>product.name===productToAdd[0].name)){
                copyOfProductsInCart.forEach(product=> {
                    if (product.name===productToAdd[0].name){
                        product.quantity += 1;
                    }
                })               
                setProductsInCart(copyOfProductsInCart)
            } else{
                copyOfProductsInCart.push(productToAdd[0])
                setProductsInCart(copyOfProductsInCart)
            }

        }
        
    }

    console.log(jsonProducts)
    return(
        <div className="flex">
        {jsonProducts.map(product=>{
            return <div className='product-card'>
            <img alt={product.description} className='small-image' src={product.image}/>
            <h1>{product.name}</h1>
            <h5>{product.description}</h5>
            <h2>{product.price} €</h2>
            <button onClick={addToCart} value={product.id}>Add Product</button>
        </div>
        })}
        </div>  
    )
}

export default ListedProduct