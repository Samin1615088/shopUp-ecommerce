import React, { useEffect, useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [reloadToggle, setReloadToggle] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5050/allproducts`)
            .then(response => response.json())
            .then(data => setAllProducts(data))
            .catch(error => console.log(error))
    }, [reloadToggle]);
    console.log(allProducts);


    const handleDelete = (id) => {
        console.log(id, 'clicked');
        fetch(`http://localhost:5050/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setReloadToggle(!reloadToggle);
            });

    }
    return (
        <div>
            <div className="container overflow-hidden">
                <h1>ALL PRODUCTS</h1>
                <table className="table table-striped mt-5 border shadow text-uppercase">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">weight</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts?.map(pd => {
                                return <>
                                    <tr key={pd._id}>
                                        <td>{pd.name}</td>
                                        <td>{pd.weight}</td>
                                        <td>{pd.price}</td>
                                        <td>
                                            <button className="btn btn-primary d-flex align-items-center" onClick={() => { handleDelete(pd._id) }}>
                                                <FaTrashAlt />
                                                <span className="mx-1">Delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>

                {/* {
                    allProducts?.map(product => {
                        return <>
                            <div className="row g-5">
                                <div className="col-4 p-1 border bg-light">{product.name}</div>
                                <div className="col-2 p-1 border bg-light">{product.weight}</div>
                                <div className="col-2 p-1 border bg-light">{product.price}</div>
                                <div className="col-4 p-1 border bg-light">
                                    <button className="btn btn-primary align-self-end" onClick={() => { handleDelete(product._id) }}>Delete</button>
                                </div>
                            </div>
                        </>
                    }
                    )
                } */}
            </div >
        </div >
    );
};

export default Products;