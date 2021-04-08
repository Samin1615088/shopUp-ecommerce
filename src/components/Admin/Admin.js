import React, { useState } from 'react';
import AddProduct from '../../subcomponents/AddProducrt/AddProduct';
import Products from '../../subcomponents/Products/Products';

const Admin = () => {
    const [subContent, setSubContent] = useState("addProduct");
    return (
        <div>
            <div className="row vh-100 bg-light">
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-primary" onClick={() => setSubContent('products')}>Manage Products</button>
                    <br />
                    <button className="btn btn-primary" onClick={() => setSubContent('addProduct')}>Add Products</button>
                </div>
                <div className="col-8">
                    {
                        subContent === 'addProduct' ?
                            (<AddProduct />)
                            :
                            (<Products />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;