import { Button, Modal, Dropdown, SplitButton } from 'react-bootstrap';
import React, { useState } from 'react';


const CustomerOrderSub = (props) => {
    const pstyle = {
        fontWeight: 'bold'
      };
    const { _id, name, subtotal, key, category, status, customerName, customerAddress, customerPhone, quantity, customerEmail, orderNo } = props.product;
    const statusHandeler = (value, id) => {
      fetch(`https://limitless-peak-48675.herokuapp.com/updateStatus/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({ value }),
          headers: { "Content-Type": "application/json" }
      })
          .then(response => response.json())
          .then(data => {
              if (data) {
                  window.location.reload();
              }
          })
  }
  const deleteProduct = id => {
    fetch(`https://limitless-peak-48675.herokuapp.com/deleteProduct/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                window.location.reload();
            }
        })
}
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <div className="row">
            <h4 className="col-md-3" style={{ textAlign: 'center' }}>{name}</h4>
            <h4 className="col-md-3" style={{ textAlign: 'center' }}>{customerName}</h4>
            <h4 className="col-md-3" style={{ textAlign: 'center' }}>
            <SplitButton className={`statusButton-${status}`} title={status} >
                    <Dropdown.Item className='pending-dropdownItem' onClick={() => statusHandeler('pending', _id)}>Pending</Dropdown.Item>
                    <Dropdown.Item className='ongoing-dropdownItem' onClick={() => statusHandeler('ongoing', _id)}>Ongoing</Dropdown.Item>
                    <Dropdown.Item className='done-dropdownItem' onClick={() => statusHandeler('done', _id)}>Done</Dropdown.Item>
                    <Dropdown.Item className='done-dropdownItem' onClick={() => deleteProduct( _id)}>Delete</Dropdown.Item>
            </SplitButton>
            </h4>
            <h4 className="col-md-3" style={{ textAlign: 'center' }}><Button variant="secondary" onClick={handleShow}>Show</Button></h4>   
        </div>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Update Your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="show-order-details">
                <p style={pstyle}>Customer Name: <span>{customerName}</span></p>
                <p style={pstyle}>Customer Phone: <span>{customerPhone}</span></p>
                <p style={pstyle}>Customer Email: <span>{customerEmail}</span></p>
                <p style={pstyle}>Customer Address: <span>{customerAddress}</span></p>
                <p style={pstyle}>Product Key: <span>{key}</span></p>
                <p style={pstyle}>Category: <span>{category}</span></p>
                <p style={pstyle}>Quantity: <span>{quantity}</span></p>
                <p style={pstyle}>Quantity: <span>{subtotal}</span></p>
                <p style={pstyle}>Quantity: <span>{orderNo}</span></p>
            </div>
        </Modal.Body >
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
    );
};

export default CustomerOrderSub;
