import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [userStatus, setUserStatus] = useContext(UserContext);
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5050/allproducts`)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, []);

    console.log(products);

    return (
        <div className="container">
            <h1>Orders</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>120</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;