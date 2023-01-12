
function CartProduct(props){
    const { productsInCart, setProductsInCart } = props
    const copyOfProductsInCart = [...productsInCart]
    console.log(copyOfProductsInCart)
    return(
<div>   
        {copyOfProductsInCart.map(product=>{
                 return   <div>
                            <h6>{product.name}</h6>
                            <h6>{product.price} €</h6>
                          </div>
        })}

</div>
    )
}

export default CartProduct