import React from 'react';
import localdummyImg from '../../products-images/image 0.png';


const Card = () => {
    return (
        <>
            <div className="col-12 col-md-4 my-3 my-md-4">
                <div className="card h-100">
                    <img src={localdummyImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <h5 className="my-auto">Price: $234</h5>
                        <button type="button" className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;