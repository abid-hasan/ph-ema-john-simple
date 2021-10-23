import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock. Order soon.</small></p>
                <button
                    className="btn-regular"
                    onClick={() => props.handleAddToCart(props.product)}
                >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;