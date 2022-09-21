import React from 'react';
import categoryPhoto from './../images/category-photo.jpg';

const TrendingProduct = () => {
    return (
        <div className="container">
            <h4 className="trending-product-h2">Trending Products</h4>
            <div className="row trending-product">
                <div className="col-md-3 col-sm-6 trending-product-item">
                <img src={categoryPhoto} alt="trending products 2" />
                <p>PC</p>
                </div>
                <div className="col-md-3 col-sm-6 trending-product-item">
                <img src={categoryPhoto} alt="trending products 2" />
                <p>PC</p>
                </div>
                <div className="col-md-3 col-sm-6 trending-product-item">
                <img src={categoryPhoto} alt="trending products 2" />
                <p>PC</p>
                </div>
                <div className="col-md-3 col-sm-6 trending-product-item">
                <img src={categoryPhoto} alt="trending products 2" />
                <p>PC</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;