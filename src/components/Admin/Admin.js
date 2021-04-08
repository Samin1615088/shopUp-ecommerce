import React, { useState } from 'react';
import AddProduct from '../../subcomponents/AddProducrt/AddProduct';
import Products from '../../subcomponents/Products/Products';

const Admin = () => {
    const [subContent, setSubContent] = useState("addProduct");

    const bgStyle = {
        backgroundColor: '#70c1b3'
    }
    const buttonStyle = {
        boxSizing: 'border-box',
        cursor: 'pointer',
        backgroundColor: '#247BA0',
        color: '#000000',
        padding: '10px 0px',
        textAlign: 'center',
         margin: "5px 0px"
    }
    const textStyle = {
        color: "#FFFFFF",
        margin: "0"
    };

    return (
        <div>
            <div className="row g-0 vh-100 bg-light">
                <div className="col-4 p-0" style={bgStyle}>
                    <div className="container-fluid w-100 mt-5" style={buttonStyle} onClick={() => setSubContent('products')}><h5 style={textStyle}>Manage Products</h5></div>
                    <div className="container-fluid w-100" style={buttonStyle} onClick={() => setSubContent('addProduct')}><h5 style={textStyle}>Add Product</h5></div>
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