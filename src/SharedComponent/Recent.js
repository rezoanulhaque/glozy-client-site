import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryPhoto from './../images/category-photo.jpg';

const Recent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-sands-42782.herokuapp.com/allProduct')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className="container">
            <h4 className="trending-product-h2">Recent Products</h4>
            <div className="row trending-product">
                {
                    products.map((oneProduct, index) =>
                            <div className="col-md-3 col-sm-6 trending-product-item">
                                <Link to={"/productDetails/" + oneProduct._id} style={{ textDecoration: 'none' }}>
                                <img src={`data:image/png;base64,${oneProduct.image.img}`} alt="trending products 2" />
                                <p>{oneProduct.name}</p>
                                </Link>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default Recent;