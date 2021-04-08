import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import PulseLoader from "react-spinners/PulseLoader";

const AddProduct = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const product = {
            name: data.name,
            imgUrl: imageURL,
            weight: data.weight,
            price: data.price
        }
        fetch(`http://localhost:5050/addProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(res => {
                console.log('server side res', res);
                alert('Product is added');
            });
    };
    const handleImage = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', 'eec93dfa44aa51e1fe335f54d3678de8');
        imageData.append('image', event.target.files[0]);

        setLoading(true)
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                if (imageURL.imgUrl !== "") {
                    setLoading(false);
                }
                console.log("image url", imageURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>Add Products</h1>
            <div className="vh-100 d-flex flex-column justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label for="nameId" class="form-label">
                        Email address
    <br />
                        <input id="nameId" className="form-control" placeholder="Enter product" {...register("name")} />
                    </label>
                    <br />

                    <label for="priceId" className="form-label">
                        Price
    <br />
                        <input id="priceId" placeholder="Enter price" {...register("price")} />
                    </label>
                    <br />

                    <label for="weightId" class="form-label">
                        weight
    <br />
                        <input placeholder="Enter weight" {...register("weight")} />
                    </label>
                    <br />

                    <label for="fileId" className="form-label ">
                        Upload Image
<br />
                        <input className="" type="file" onChange={handleImage} />
                        <br />
                        {
                            loading &&
                            <p className="text-muted">wait photo is being uploaded</p>
                        }
                        <PulseLoader loading={loading} color={"#0dcaf0"} size={10} />
                    </label>
                    <br />
                    <input type="submit" className="mt-3 btn btn-outline-success" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;