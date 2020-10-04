import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';

import UploadImage from '../components/UploadImage';

import { 
	Button, 
	Input, 
	TextArea,
} from '../components/Form'

const url = 'http://localhost:3000/db.json';

const EditProduct = (props) => {
    const [product, setProduct] = useState({});
    const idProduct = props.location.state.productId;

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(url);

          const findProduct = result.data.products.filter(product => product.id === idProduct)[0];
          setProduct(findProduct);
        };
     
        fetchData();
    }, []);

    const inputHandle = (type, value) => {
        setProduct((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(product);
    }

    return (
        <section className="section-edit-product">
            <div className="container">
                <h1>Edit product {product.title}</h1>
                <div className="section-content">
                    {/* <div className="image-upload">
                        <img src={product.imageUrl} alt={product.title}/>
                        <div className="btn-wrap">
                            <Button additionalClsName="success">Upload</Button>
                            <Button additionalClsName="danger">Remove</Button>
                        </div>
                    </div> */}
                    <UploadImage imageUrl={product.imageUrl} />
                    <div className="product-edit">
                        <form className="product-form">
                            <Input 
                                type="text"
                                label="Title"
                                placeholder="Title"
                                value={product.title}
                                onHandleInput={(value) => inputHandle('title', value)} 
                            />
                            <Input 
                                type="text"
                                label="Price"
                                placeholder="Price"
                                value={product.price}
                                onHandleInput={(value) => inputHandle('price', value)} 
                            />
                            <Input 
                                type="text"
                                label="Discount"
                                placeholder="Discount"
                                value={product.discount}
                                onHandleInput={(value) => inputHandle('discount', value)} 
                            />
                            <Input 
                                type="date"
                                label="Date discount over"
                                placeholder="Date discount over"
                                value={product.dateDiscountOver}
                                onHandleInput={(value) => inputHandle('dateDiscountOver', value)} 
                            />
                            <TextArea 
                                id="textarea-product"
                                label="Title"
                                placeholder="Title"
                                value={product.description}
                                onHandleInput={(value) => inputHandle('description', value)} 
                            />
                            <Button additionalClsName="primary" onHangleClick={submitForm}>Save</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditProduct;