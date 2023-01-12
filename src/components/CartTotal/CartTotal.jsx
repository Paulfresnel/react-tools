import './CartTotal.css'

function CartTotal(props){
    const { cartValue, setCartValue} = props;
    return(
        <div className="cart-total">
            <h3>Total Cart Value:</h3>
            <h4>{cartValue} €</h4>
        </div>
    )
}

export default CartTotal