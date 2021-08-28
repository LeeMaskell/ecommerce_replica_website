import { selectData } from '../containers/globalSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import RemoveButton from './RemoveButton.js';
import CartDefault from './CartDefault.js';
import { remove } from '../containers/globalSlice.js';

const Cart = () => {
    const state = useSelector(selectData);
    const dispatch = useDispatch();

    const sumPrices = () => {
        if (state.length == 0) return 0;
        if (state.length == 1) return state[0].price;
        let total = 0;
        state.forEach(x => total += x.price);
        return total;
    }

    return (
        <div className="cart">
            <div className="collection-banner">
                <h1>Shopping Cart</h1>
            </div>
            <div className="models">
                {console.log(state)}
                {state.length == 0 ? <CartDefault /> : state.map((item) => (
                    <div key={item.id} className="model-card">
                        <div className="model-card__flex-container">
                            <h4 className="model-card__name">{item.name}</h4>
                            <h4 className="model-card__price">${item.price}</h4>
                        </div>
                        <img src={item.image} className="model-card__img" />
                        <RemoveButton onClickHandler={() => dispatch(remove(item))}>Remove</RemoveButton>
                    </div>
                ))
                }
            </div>
            <div className="total-price">
                    <h1>Total: ${sumPrices()} </h1>
                </div>
        </div> 
    );
}

export default Cart;

