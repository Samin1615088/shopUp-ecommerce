import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import PulseLoader from "react-spinners/PulseLoader";

const AddProduct = () => {
    const [imageURL, setImageURL] = useState("https://dummyimage.com/900x900/7d567d/ffffff&text=Product+Picture");
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const product = {
            name: data.name,
            imgUrl: imageURL,
            weight: data.weight,
            price: data.price
        }

        fetch(`https://blooming-tundra-01056.herokuapp.com/addProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
        .then(res => {
                console.log('product', product);
                console.log('server side res', res);
                alert('Product is added');
            });
    };
    const handleImage = (event) => {
        console.log('image', event.target.files);
        const imageData = new FormData();
        imageData.set('key', '5d25a05b3edb298ca3a5e9b1720f835a');
        imageData.append('image', event.target.files[0]);
        console.log('imagedata', imageData);
        setLoading(true);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                if (imageURL !== "" || imageURL !== "https://dummyimage.com/900x900/7d567d/ffffff&text=Product+Picture") {
                    setLoading(false);
                }
                console.log("response image url", response.data.data.display_url);
                console.log("local image url", imageURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <h1>Add Products</h1>
            <div className="vh-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label for="nameId" className="form-label">
                                Product
                            </label>
                            <input id="nameId" className="form-control" placeholder="Enter product" {...register("name")} />
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="priceId" className="form-label">
                                Price
                            </label>
                            <input className="form-control" id="priceId" placeholder="Enter price" {...register("price")} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label for="weightId" className="form-label">
                                weight
                        </label>
                            <input className="form-control" placeholder="Enter weight" {...register("weight")} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label for="fileId" className="form-label ">
                                Upload Image
                        </label>
                            <input className="form-control" type="file" onChange={handleImage} />
                            {
                                loading &&
                                <p className="text-muted">wait photo is being uploaded</p>
                            }
                            <PulseLoader loading={loading} color={"#0dcaf0"} size={10} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type="submit" className="mt-3 btn btn-outline-success" />
                        </div>
                    </div>

                </form>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="nameId" class="form-label">
                        Product
                        <input id="nameId" className="form-control" placeholder="Enter product" {...register("name")} />
                    </label>
                    <br />

                    <label for="priceId" className="form-label">
                        Price
                        <input id="priceId" placeholder="Enter price" {...register("price")} />
                    </label>
                    <br />

                    <label for="weightId" class="form-label">
                        weight
                        <input placeholder="Enter weight" {...register("weight")} />
                    </label>
                    <label for="fileId" className="form-label ">
                        Upload Image
                        <input className="" type="file" onChange={handleImage} />
                        {
                            loading &&
                            <p className="text-muted">wait photo is being uploaded</p>
                        }
                        <PulseLoader loading={loading} color={"#0dcaf0"} size={10} />
                    </label>
                    <input type="submit" className="mt-3 btn btn-outline-success" />
                </form> */}
            </div>
        </div>
    );
};

export default AddProduct;