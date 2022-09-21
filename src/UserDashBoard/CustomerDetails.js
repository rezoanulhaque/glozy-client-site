import React, { useEffect, useState } from 'react';
import CustomerDetailsSub from './CustomerDetailsSub';
import './CustomerDetails.css';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-bootstrap';
import Header from '../SharedComponent/Header';

const CustomerDetails = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [deUser, setDeUser] = useState({});
    const [myOrder, setMyOrder] = useState([]);
    let user = {
        name: '',
        email: '',
        phone: '',
        address: ''
    }
    const finalUser = { ...user, ...(JSON.parse(sessionStorage.getItem('user'))) }
    user.name=finalUser.displayName;
    user.email=finalUser.email;
    useEffect(() => {
        fetch(`https://murmuring-sands-42782.herokuapp.com/myOrder?email=${finalUser.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    useEffect(() => {
        fetch(`https://limitless-peak-48675.herokuapp.com/existingUser?email=${finalUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    fetch('https://murmuring-sands-42782.herokuapp.com/addNewUser', {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
                else if (data.length > 0) {
                    user.phone = data[0].phone;
                    user.address = data[0].address;
                    setDeUser(user);    
                }
            })
    }, [])
    const onSubmit = (data) => {
        const ajairaData = { ...data };
        fetch(`https://murmuring-sands-42782.herokuapp.com/updatedInfo?email=${finalUser.email}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ajairaData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Update info Successful')
                    window.location.reload();
                }
            })
        handleClose()
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Header></Header>
            <h1 style={{ textAlign: "center" }}>Welcome {finalUser.displayName}</h1>
            <div className="user-details">
                <p>Name: {finalUser.displayName}</p>
                <p>Email: {finalUser.email}</p>
                <p>Phone: {deUser.phone}</p>
                <p>Address: {deUser.address}</p>
                <button onClick={handleShow}>Update Your Info</button>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Your Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="update-your-info">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Update Your Phone Number</label>
                            <input type="text" name="phone" defaultValue={user.phone} {...register('key', { required: true })} placeholder="Phone Number" />
                            {errors.phone && <span className="error">Url is required</span>}
                            <label>Update Your Address</label>
                            <input type="text" name="address" defaultValue={user.address} {...register('key')} placeholder="Address" />
                            {errors.address && <span className="error">Product Name is required</span>}
                            <input type="submit" />
                        </form>
                    </div>
                </Modal.Body >
            </Modal>
            <div>
                {myOrder.length === 0 ? <br/> :
                    <div>
                        <h2 style={{ marginLeft: "5%" }}>Your Products</h2>
                        <div className="table-head">
                            <h4 className="table-content" style={{ textAlign: 'center' }}>Product Name</h4>
                            <h4 className="table-content table-display" style={{ textAlign: 'center' }}>Quantity</h4>
                            <h4 className="table-content table-display" style={{ textAlign: 'center' }}>Order No</h4>
                            <h4 className="table-content" style={{ textAlign: 'center' }}>Status</h4>
                        </div>
                        <div>
                            {myOrder.map(pd => <CustomerDetailsSub product={pd} key={pd.key}></CustomerDetailsSub>)}
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default CustomerDetails;