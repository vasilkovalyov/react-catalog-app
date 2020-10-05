import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../components/Product';


const Home = () => {
    const products = useSelector(state => state.products.products);

    return (
        <section className="section-products">
            <div className="container">
                <div className="section-products__content">
                    <div className="section-caption">
                        <h1>Products</h1>    
                        
                    </div>
                    <div className="products-list">
                        { products ? products.map((product, key) => (
                            <div className="col" key={key}>
                                <Product product={product}/>
                            </div>
                        )) : 'null' }
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Home;