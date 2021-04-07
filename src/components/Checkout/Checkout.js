import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const [orderedProduct, setOrderedProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get(`http://localhost:5050/product/${id}`)
            .then(response => {
                setOrderedProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(orderedProduct);

    
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
};

export default Checkout;