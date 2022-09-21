import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader';
import ProductListSub from './ProductListSub';

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [featuresList, setFeaturesList] = useState([]);
    
    let user = {
        email: '',
        name: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    useEffect(()=>{
        fetch(`https://murmuring-sands-42782.herokuapp.com/yourProductList?name=${finalUser.displayName}`)
            .then(res => res.json())
            .then(data => setProductList(data))
    },[])
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="ProductList">
                <div className="row">
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>name</h4>
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>price</h4>
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>In stock</h4>
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>Edit</h4>
                </div>
                <div>
                    {productList.map(pd => <ProductListSub product={pd} key={pd._id} featuresList={featuresList} setFeaturesList={setFeaturesList}></ProductListSub>)}
                </div>
                
            </div>
        </div>
    );
};

export default ProductList;