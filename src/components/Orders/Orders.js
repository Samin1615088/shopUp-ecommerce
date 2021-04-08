import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [userStatus, setUserStatus] = useContext(UserContext);
    const [orderedProduct, setOrderedProduct] = useState([]);

    let total = 0;
    orderedProduct.forEach(pd => {
        total = total + parseInt(pd.price);
    });

    useEffect(() => {
        fetch(`https://blooming-tundra-01056.herokuapp.com/orders/${userStatus.email}`)
            .then(response => response.json())
            .then(data => setOrderedProduct(data))
    }, []);

    console.log(orderedProduct);

    return (
        <div className="container">
            <h1>Orders</h1>

            <table className="table table-striped mt-5 border shadow text-uppercase">
                <thead>
                    <tr>
                        <th scope="col">Ordered Date</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderedProduct?.map(pd => {
                            return <>
                                <tr key={pd._id}>
                                    <td>{pd.orderDate}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.weight}</td>
                                    <td>{pd.price}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr className="h5">
                        <td >TOTAL</td>
                        <td></td>
                        <td></td>
                        <td>&#36; {total}</td>
                    </tr>
                </tfoot>
            </table>
        </div >
    );
};

export default Orders;