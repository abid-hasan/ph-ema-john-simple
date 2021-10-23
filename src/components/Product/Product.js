import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock. Order soon.</small></p>
                <button
                    className="btn-regular"
                    onClick={() => props.handleAddToCart(props.product)}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faCartPlus} />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;