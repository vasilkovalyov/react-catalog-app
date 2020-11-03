import React from 'react';
import { useEffect, useState } from 'react';

import UploadImage from '../components/UploadImage';

import firebase from '../firebase';

import { 
	Button, 
	Input, 
	TextArea,
} from '../components/Form'
import { useHistory } from 'react-router-dom';


const EditProduct = (props) => {
    const [product, setProduct] = useState({});
    // const idProduct = props.location.state.productId;
    const history = useHistory();

    useEffect(() => {
        const productKey = history.location.state.productId;
        firebase.doLoadProductById(productKey)
        .then(response => {
            console.log(response);
            setProduct(response);
        })

    }, [history]);

    const inputHandle = (type, value) => {
        setProduct((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    function handleClickImage(...image) {
        setProduct({
            ...product,
            image: image[0]
        })
    }

    function submitForm(e) {
        e.preventDefault();
    }

    return (
        <section className="section-edit-product">
            <div className="container">
                <h1>Edit product {product.title}</h1>
                <div className="section-content">
                    <UploadImage 
                        imageUrl={product.image} 
                        handleClickImage = {(image) => handleClickImage(image)}
                    />
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