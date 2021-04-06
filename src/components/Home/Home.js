import React, { useEffect, useState } from 'react';

import Card from '../../subcomponents/Card/Card';

const Home = () => {
    const [allProducts, setAllProducts] = useState([]);


    //get all products from server>>
    useEffect(() => {
        fetch(`http://localhost:5050/allproducts`)
            .then(response => response.json())
            .then(data => setAllProducts(data))
            .catch(error => console.log(error))
    }, []);
    //get all products from server<<
    console.log('all products Home*', allProducts);

    return (
        <>
            <h1>Home</h1>
            <div className="container">
                <div className="row">
                    {
                        allProducts?.map(product => {
                            return <Card product={product} key={product._id} />
                        }
                        )
                    }
                    {/* <Card itemData={dummyItemData}/> */}
                </div>
            </div>
        </>
    );
};

export default Home;