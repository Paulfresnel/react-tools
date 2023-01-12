import jsonProducts from '../products.json' 
import ListedProduct from './ListedProduct/ListedProduct'


function ProductsList(props){
 const {productsInCart, setProductsInCart, cartValue, setCartValue} = props
    return(
        <div>
            <h1>Trying</h1>
            <ListedProduct cartValue={cartValue} setCartValue={setCartValue} productsInCart={productsInCart} setProductsInCart={setProductsInCart} jsonProducts={jsonProducts}/>
        </div>
    )
}

export default ProductsList