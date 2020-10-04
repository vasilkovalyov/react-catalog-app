import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from './Form'


const ProductCard = (props) => {
    
    const { id, imageUrl, title, description, price, discount, dateDiscountOver } = props.product;

    const getOldPrice = () => {
        return price - ((price / 100) * discount);
    };

    const getLeftDiscountDays = () => {
        const targetTime = new Date().getTime();
        const nextTime = new Date(dateDiscountOver).getTime();
        let diff = 0;
        const days = 1000 * 60 * 60 * 24;
        diff = nextTime - targetTime;

        return Math.round(diff / days); 
    }

    const convertTitleProductForUrl = (title) => title.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={imageUrl} alt={title}/>
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
                            <del className="product-card__price-old">{getOldPrice(price).toFixed(0)}</del>
                            : null
                    }
                    
                    <span className="product-card__price">{price}$</span>
                </div>
                <div className="product-card__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="product-card__btn-wrap">
                <Link to={{pathname: `/edit/${convertTitleProductForUrl(title)}/`, state: {productId: id}}}>
                    <Button additionalClsName="success">Edit</Button>
                </Link>
                <Button additionalClsName="danger" onHangleClick={() => {}}>Remove</Button>
            </div>
        </div>
    );
};

export default ProductCard;