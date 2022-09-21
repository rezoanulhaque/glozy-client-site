import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../App';
import Header from '../SharedComponent/Header';

const Shipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cartProduct, setCartProduct] = useContext(CartContext);
    const total = cartProduct.reduce((total, prd) => total+prd.price*prd.quantity, 0).toFixed(2);
    let user = {
        email: '',
        name: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    const onSubmit = (data, e) => {
        const randomNumber = Math.floor(Math.random() * 100000000).toString();
        const slicedName = data.name.slice(0, 4)
        const orderNo = (randomNumber.concat(slicedName));
        cartProduct.map(pd => {pd.customerName=data.name;
            pd.customerAddress=data.address; pd.customerPhone=data.phone;
            pd.customerEmail=data.email;pd.grandTotal=data.total;pd.orderNo=orderNo;pd.status='pending';
        })
        fetch('https://murmuring-sands-42782.herokuapp.com/addShipment', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Add Product Successful')
                    e.target.reset();
                    setCartProduct([]);
                }
            })
      };
      const getFields = (input, field) => {
        const output = [];
        for (let i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }
    var productKeyYouOrdered = getFields(cartProduct, "key");
    return (
        <div>
             <Header></Header>
            <div className="add-shipment-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="name" defaultValue={finalUser.displayName} {...register('name', { required: true })} />
                    {errors.name && errors.name.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    <input name="email" defaultValue={finalUser.email} {...register('email', { required: true })} placeholder="Your Email" />
                    {errors.email && errors.email.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    <input name="address" defaultValue={finalUser.address} {...register('address', { required: true })} placeholder="Your Address" />
                    {errors.address && errors.address.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    <input name="phone" defaultValue={finalUser.phone} {...register('phone', { required: true })} placeholder="Your Phone Number" />
                    {errors.phone && errors.phone.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    <input name="total" defaultValue={total} {...register('total', { required: true })} placeholder="Total Amount" />
                    {errors.total && errors.total.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    <input name="productKeyYouOrdered" defaultValue={productKeyYouOrdered } {...register('productKeyYouOrdered', { required: true })} placeholder="Product Key" />
                    {errors.productKeyYouOrdered && errors.productKeyYouOrdered.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    <input type="submit" value="Confirm" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;