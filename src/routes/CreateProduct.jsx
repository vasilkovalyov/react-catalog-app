import React from 'react';
import { useState } from 'react';

import UploadImage from '../components/UploadImage'

import { 
	Button, 
	Input, 
	TextArea,
} from '../components/Form'


const CreateProduct = () => {

    const [product, setProduct] = useState({
        imageUrl: null,
        title: null,
        price: null,
        discount: null,
        dateDiscountOver: null,
        description: null
    })

    const inputHandle = (type, value) => {
        setProduct((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    function submitForm(e) {
        e.preventDefault();
    }

    return (
        <section className="section-create-product">
            <div className="container">
                <div className="section-content">
                <div className="section-content">
                    {/* <div className="image-holder">
                        <div className="image-holder__thumb"></div>
                        <img src={product.imageUrl} />
                        <div className="btn-wrap">
                            <Button additionalClsName="success">Upload</Button>
                            <Button additionalClsName="danger">Remove</Button>
                        </div>
                    </div> */}
                    <UploadImage />
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
                            <Button additionalClsName="success" onHangleClick={submitForm}>Create Product</Button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

CreateProduct.propTypes = {};

export default CreateProduct;