import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
    const { _id, imgUrl, name, price, weight } = props.product;
    const handleBuyNow = () => {
        console.log(_id);
    }
    return (
        <>
            <div className="col-12 col-md-4 my-3 my-md-4">
                <div className="card h-100">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-uppercase">{name}</h3>
                        <p className="text-muted">{`weight: ${weight}`}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <h5 className="my-auto">{`Price: ${price}`}</h5>
                        <Link to={`/checkout/${_id}`} className="btn btn-success">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;