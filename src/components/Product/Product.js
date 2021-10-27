import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <Rating
                    readonly
                    initialRating={star}
                    emptySymbol={<FontAwesomeIcon icon={faStarRegular} />}
                    fullSymbol={<FontAwesomeIcon className="full-star" icon={faStar} />}
                />
                <p><small>Only {stock} left in stock. Order soon.</small></p>
                <button
                    className="btn-regular"
                    onClick={() => props.handleAddToCart(props.product)}
                >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;