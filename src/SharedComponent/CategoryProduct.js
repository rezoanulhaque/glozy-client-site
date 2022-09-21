import React from 'react';
import categoryPhoto from './../images/category-photo.jpg';
import './../App.scss';

const CategoryProduct = () => {
    return (
        <div className="container">
            <h4 className="category-product-h2">Popular Categories</h4>
            <div className="row category-product">
                <div className="category-product-item">
                <img src={categoryPhoto} alt="category products 2" />
                <p>PC</p>
                </div>
                <div className="category-product-item">
                <img src={categoryPhoto} alt="category products 2" />
                <p>PC</p>
                </div>
                <div className="category-product-item">
                <img src={categoryPhoto} alt="category products 2" />
                <p>PC</p>
                </div>
                <div className="category-product-item">
                <img src={categoryPhoto} alt="category products 2" />
                <p>PC</p>
                </div>
                <div className="category-product-item">
                <img src={categoryPhoto} alt="category products 2" />
                <p>PC</p>
                </div>
                <div className="category-product-item">
                <img src={categoryPhoto} alt="image 2" />
                <p>PC</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;