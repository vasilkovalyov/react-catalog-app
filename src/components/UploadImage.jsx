import React, { useState, useRef } from 'react';

import { Button } from './Form';
import { useEffect } from 'react';

const UploadImage = (props) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileUploader = useRef(null);

    useEffect(() => {
        setImageUrl(props.imageUrl);
    }, [props])

    const uploadButton = (e) => {
        fileUploader.current.click();
    }

    const removeImage = (e) => {
        fileUploader.current.value = '';
        setImageUrl(null)
    }

    const uploadImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onload = () => {
            setImageFile(file);
            setImageUrl(reader.result);
        }

        reader.readAsDataURL(file);
    }

    return (
        <div className="image-upload">
            {
                imageUrl != null ? <img src={imageUrl} />
                : <div className="image-upload__thumb"></div>
            }
            <div className="btn-wrap">
                <Button additionalClsName="success" onHangleClick={(e) => uploadButton(e)}>
                    Upload
                    <input type="file" className="hidden"  ref={fileUploader} onChange={(e) => uploadImage(e)} />
                </Button>
                <Button additionalClsName="danger" onHangleClick={(e) => removeImage(e)}>Remove</Button>
            </div>
        </div>
    );
};



export default UploadImage;