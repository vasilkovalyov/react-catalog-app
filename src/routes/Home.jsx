import React, { useEffect, useState } from 'react';

import Product from '../components/Product';
import axios from 'axios';

const url = 'http://localhost:3000/db.json';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(url);
     
          setProducts(result.data.products);
        };
     
        fetchData();
    }, []);

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