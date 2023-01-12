import CartTotal from "../CartTotal/CartTotal"
import "./CartList.css"
import CartProduct from "../CartProduct/CartProduct"

function CartList(props){
 const { productsInCart, setProductsInCart, cartValue, setCartValue} =  props
    

    return(
        <div className="cart-list">
            <h1>ITEM List</h1>
            <CartProduct productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            <CartTotal cartValue={cartValue} setCartValue={setCartValue}/>
        </div>
    )
}

export default CartList