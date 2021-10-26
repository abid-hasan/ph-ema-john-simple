import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, currentProduct) => previous + currentProduct.price;
    // const total = cart.reduce(totalReducer, 0);

    let total = 0;
    let quantity = 0;

    cart.forEach(product => {
        if (!product.quantity) {
            product.quantity = 1;
        }
        quantity += product.quantity;
        total += product.price * product.quantity;
    });

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {quantity}</h5>
            <h5>Total Price: {total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;