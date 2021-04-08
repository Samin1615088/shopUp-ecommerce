import React, { useEffect, useState } from 'react';

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
                {
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
                }
            </div>
        </div>
    );
};

export default Products;