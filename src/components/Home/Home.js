import React, { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Card from '../../subcomponents/Card/Card';

const Home = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    //get all products from server>>
    useEffect(() => {
        fetch(`https://blooming-tundra-01056.herokuapp.com/allproducts`)
            .then(response => response.json())
            .then(data => {
                setAllProducts(data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, []);
    //get all products from server<<
    // console.log('all products Home*', allProducts);

    return (
        <>
            <div className="container">
                {(loading) ?
                    (<div className="vh-100 d-flex d-column justify-content-center align-items-center ">
                        <HashLoader color={"#00FFFF"} loading={true} size={150} />
                    </div>)
                    :
                    (<div className="row">
                        {
                            allProducts?.map(product => {
                                return <Card product={product} key={product._id} />
                            }
                            )
                        }
                    </div>)
                }
            </div>
        </>
    );
};

export default Home;