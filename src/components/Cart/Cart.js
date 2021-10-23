import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    const reducer = (previous, current) => previous + current.price;
    const total = cart.reduce(reducer, 0);


    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Total Price: {total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;