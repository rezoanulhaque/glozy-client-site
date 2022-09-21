import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader';
import CustomerOrderSub from './CustomerOrderSub';

const CustomerOrder = () => {
    const [customerOrder, setCustomerOrder] = useState ([]);
    console.log(customerOrder);
    let user = {
        email: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    useEffect (()=>{
        fetch(`https://limitless-peak-48675.herokuapp.com/customerOrder?name=${finalUser.displayName}`)
        .then(res => res.json())
        .then(data => setCustomerOrder(data))
    },[])
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="ProductList">
                <div className="row">
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>Product Name</h4>
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>Customer Name</h4>
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>Status</h4>
                    <h4 className="col-md-3" style={{textAlign: 'center'}}>Customer Details</h4>
                </div>
                <div>
                    {customerOrder.map(pd => <CustomerOrderSub product={pd} key={pd.key}></CustomerOrderSub >)}
                </div>
                
            </div>
            
        </div>
    );
};

export default CustomerOrder;