import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartItems.css';

const CartItems = ({ product, deleteBtn }) => {
    return (
        <div className='cart-item'>
            <img src={product.img} alt="" />
            <h4 className='cart-item-name'>{product.name}</h4>
            <button onClick={() => deleteBtn(product)}>
                <p className='cart-delete-btn'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default CartItems;