import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { CartContext } from '../App';

const CartProduct = (props) => {
    const [cartProduct, setCartProduct] = useContext(CartContext);
    const { key } = props.product;
    const product = cartProduct.find(pd => pd.key === key);
    const { quantity, name, price, stock, subtotal } = product;
    const [reviewQuantity, setReviewQuantity] = useState(quantity);
    const addReviewProductToCart = () => {
        const reviewsubtotal = (price * reviewQuantity);
        let newProduct = {
            key: key,
            name: name,
            price: price,
            stock: stock,
            quantity: reviewQuantity,
            subtotal: reviewsubtotal
        }
        const others = cartProduct.filter(pd => pd.key !== key);
        const finalCartProduct = [...others, newProduct];
            setCartProduct(finalCartProduct);
            setShow(false);
        }
    const increase = () => { reviewQuantity < stock ? setReviewQuantity(reviewQuantity + 1) : setReviewQuantity(reviewQuantity) }
    const decrease = () => { reviewQuantity > 1 ? setReviewQuantity(reviewQuantity - 1) : setReviewQuantity(reviewQuantity) }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="cart-product-element">
            <p className="cart-product-element-1">{ name }</p>
            <h4 className="cart-product-element-2" >{ quantity }</h4>
            <h4 className="cart-product-element-3" >{ price}</h4>
            <h4 className="cart-product-element-4" >{ subtotal }</h4>
            <div className="cart-product-element-5" >
                <Button className="edit-btn" onClick={handleShow}>Edit</Button>
                {/* <FontAwesomeIcon onClick={()=>props.removeFromCart(key)} style={{fontSize:"30px", paddingTop: '5px', color:'red'}} icon={faTimesCircle} /> */}
            </div>
            <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Your Order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div>
                        <p>Quantity: <button><FontAwesomeIcon onClick={decrease} icon={faMinus} /></button> {reviewQuantity} <button><FontAwesomeIcon onClick={increase} icon={faPlus} /></button></p>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=>{props.removeFromCart(key);
                            setShow(false)}}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={addReviewProductToCart}>
                                Confirm Now
                            </Button>
                        </Modal.Footer>
                    </Modal>
        </div>
            
        </div>
    );
};

export default CartProduct;