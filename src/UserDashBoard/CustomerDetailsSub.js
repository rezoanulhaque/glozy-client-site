import React from 'react';
import './CustomerDetails.css';

const CustomerDetailsSub = (props) => {
    const { name, quantity, orderNo, status } = props.product;

    return (
        <div>
            <div className="table-head">
            <h4 className="table-content" style={{ marginLeft: "2%" }}>{name}</h4>
            <h4 className="table-content table-display" style={{ textAlign: 'center' }}>{quantity}</h4>
            <h4 className="table-content table-display" style={{ textAlign: 'center' }}>{orderNo}</h4>
            <h4 className="table-content" style={{ textAlign: 'center' }}>{status}</h4>   
        </div>
            
        </div>
    );
};

export default CustomerDetailsSub;