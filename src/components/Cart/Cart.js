import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css';

const Cart = (props) => {
    const { cart, chooseForMeHandle, randomProduct, resetHandle, deleteBtn } = props;
    return (
        <div className='cart'>
            {
                cart.map(product => <CartItems product={product}
                    key={product.id}
                    deleteBtn={deleteBtn}></CartItems>)
            }

            <p>{randomProduct.name}</p>
            <button onClick={() => chooseForMeHandle(cart)} className='btn-cart'>
                <p className='btn-text'>CHOOSE 1 FOR ME</p>
            </button> <br />
            <button onClick={resetHandle} className='btn-cart2'>
                <p className='btn-text'>RESET</p>
            </button>
        </div>
    );
};

export default Cart;