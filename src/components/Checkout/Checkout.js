import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [userStatus, setUserStatus] = useContext(UserContext);
    const [cart, setCart] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5050/product/${id}`)
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(cart);

    const handleConfirmBuy = () => {
        const currentCart = { ...cart };
        currentCart.orderDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        currentCart.email = userStatus.email;
        console.log(currentCart);
        axios.post(`http://localhost:5050/placeorder`, currentCart)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <div className="container">
            <h1>Checkout</h1>
            <table className="table table-striped mt-5 border shadow text-uppercase">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cart.name}</td>
                        <td>{cart.weight}</td>
                        <td>1</td>
                        <td>{cart.price}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="h5">
                        <td >TOTAL</td>
                        <td>{cart.weight}</td>
                        <td>1</td>
                        <td>&#36; {cart.price}</td>
                    </tr>
                </tfoot>
            </table>
            <div className="text-center">
                <button className="btn btn-info" onClick={handleConfirmBuy}>Confirm Buy</button>
            </div>
        </div>
    );
};

export default Checkout;