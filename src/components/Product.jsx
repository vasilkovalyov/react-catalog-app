import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from './Form'


const ProductCard = (props) => {
    const { 
        key, 
        image, 
        title, 
        description, 
        price,
        discount,
        dateDiscountOver 
    } = props.product;


    const getOldPrice = (price) => {
        const regex = /(\d+)/g;
        const numPrice = price.split(/[0-9]+/).join("") + price.match(regex).join('');
        return (numPrice - ((numPrice / 100) * discount)).toFixed(0);
    };

    const getLeftDiscountDays = () => {
        const targetTime = new Date().getTime();
        const nextTime = new Date(dateDiscountOver).getTime();
        let diff = 0;
        const days = 1000 * 60 * 60 * 24;
        diff = nextTime - targetTime;

        return Math.round(diff / days); 
    }

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-card__body">
                <strong className="product-card__title">{title}</strong>
                {
                    discount && getLeftDiscountDays() > 0 ? 
                        <div className="product-card__discount">
                            <span className="product-card__discount-sale">-{discount}% </span>
                            <span className="product-card__discount-msg">{getLeftDiscountDays()} days left</span>
                        </div>
                    : null
                 }
                <div className="product-card-prices">
                    {
                        discount ? 
                            <del className="product-card__price-old">{getOldPrice(price)}$</del>
                            : null
                    }
                    
                    <span className="product-card__price">{price}$</span>
                </div>
                <div className="product-card__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="product-card__btn-wrap">
                <Link to={{pathname: `/edit/${key}/`, state: {productId: key}}}>
                    <Button additionalClsName="success">Edit</Button>
                </Link>
                <Button additionalClsName="danger" onHangleClick={() => {}}>Remove</Button>
            </div>
        </div>
    );
};

export default ProductCard;