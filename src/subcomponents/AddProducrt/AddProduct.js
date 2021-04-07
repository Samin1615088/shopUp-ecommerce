import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const [imageURL, setImageURL] = useState("");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const product = {
            name: data.name,
            imgUrl: imageURL,
            weight: data.weight + ' Kg',
            price: data.price
        }
        fetch(`http://localhost:5050/addProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(res => console.log('server side res', res));
    };
    const handleImage = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '0c1c809e4573eb13da395aa37eb8712d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>Add Products</h1>
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
                <br/>
                    <input className="" type="file" onChange={handleImage} />
                </label>
                <br />
                <input type="submit"  className="mt-3 btn btn-outline-success"/>
            </form>
        </div>
    );
};

export default AddProduct;