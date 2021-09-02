import '../styles/cart.css';

const CartDefault = () => {
    return ( 
        <div className="cart__default-text">
                <h2 className="cart__default-text--heading">Empty Cart</h2>
                <p className="cart__default-text--content">Well darn, it doesn't look like you have anything in this shopping cart!</p>
                <p className="cart__default-text--content">Expecting items in here? We use cookies to persist your shopping cart. If you're using a different computer or have recently cleared your cookies you won't see your items.</p>
            </div> 
     );
}
 
export default CartDefault;