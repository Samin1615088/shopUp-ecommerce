import React from 'react';
import Card from '../../subcomponents/Card/Card';

const Home = () => {
    const dummyItemData ={
        imgUrl: 'https://dummyimage.com/900/000/fff&text=900x900',
        name: 'dummyName',
        price: '100'
    }
    return (
        <>
            <h1>Home</h1>
            <div className="container">
                <div className="row">
                    <Card itemData={dummyItemData}/>
                </div>
            </div>
        </>
    );
};

export default Home;