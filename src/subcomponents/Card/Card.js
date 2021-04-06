import React from 'react';
import localdummyImg from '../../products-images/image 0.png';


const Card = (props) => {
    const { imgUrl, name, price, weight } = props.product;
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
                        <button type="button" className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;