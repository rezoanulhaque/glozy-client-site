import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import './../../App.scss';
import { useHistory } from 'react-router-dom';


const ProductListSub = (props) => {
    const {  name, price, stock } = props.product;
    const history = useHistory();
    const id = props.product._id;
    const deleteSingleProduct = () => {
        fetch(`https://murmuring-sands-42782.herokuapp.com/deleteSingleProduct/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Delete Successfully!');
                    window.location.reload();
            }})
    }
    const productEdit = () => {
        history.push('/productEdit/'+id);
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <div className="row">
                <h4 className="col-md-3" style={{ textAlign: 'center' }}>{name}</h4>
                <h4 className="col-md-3" style={{ textAlign: 'center' }}>{price}</h4>
                <h4 className="col-md-3" style={{ textAlign: 'center' }}>{stock}</h4>
                <h4 className="col-md-3" style={{ textAlign: 'center' }}><Button variant="secondary" onClick={productEdit}>Edit</Button><Button variant="secondary" onClick={deleteSingleProduct}>Delete</Button></h4>
                
            </div>
            {/* <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Your Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="update-product-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Update Your Image</label>
                            <input type="file" name="img" defaultValue={`data:image/png;base64,${image.img}`} /> 
                            <label>Update Your Product Name</label>
                            <input type="text" name="name" defaultValue={name} {...register('name', { required: true })} placeholder="Product Name" />
                            {errors.name && errors.name.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <label>Update Your Seller Name</label>
                            <input name="sellername" defaultValue={sellername} {...register('sellername', { required: true })} placeholder="Enter Your Seller Name" />
                            {errors.sellername && errors.sellername.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <label>Update Your Price</label>
                            <input type="number" name="price" defaultValue={price} {...register('price', { required: true })} placeholder="Enter Your Price" />
                            {errors.price && errors.price.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <label>Update Your Stock</label>
                            <input type="number" name="stock" defaultValue={stock} {...register('stock', { required: true })} placeholder="Enter Your Stock" />
                            {errors.stock && errors.stock.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <label>Update Your Product Key</label>
                            <input name="key" defaultValue={key} {...register('key', { required: true })} placeholder="Enter Your Stock" />
                            {errors.key && errors.key.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <label>Update Your Catrgory</label>
                            <input name="category" defaultValue={category} {...register('category', { required: true })} placeholder="Enter Your Stock" />
                            {errors.category && errors.category.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <label>Update Your Description</label>
                            <input name="description" defaultValue={description} {...register('description', { required: true })} placeholder="Enter Your Stock" />
                            {errors.description && errors.description.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                            <input type="submit" />
                        </form>
                        <ProductListFeature feature={feature} featuresList={featuresList} setFeaturesList={setFeaturesList}></ProductListFeature>
                    </div>
                </Modal.Body >
            </Modal> */}

        </div>
    );
};

export default ProductListSub;