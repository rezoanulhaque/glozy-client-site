import { Modal, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../App';
import Header from '../SharedComponent/Header';
import Search from '../SharedComponent/Search';


const ProductDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [productsFeature, setProductsFeature] = useState([]);
    let firstProduct = {
        image: '',
        name: '',
        price: '',
        stock: '',
        category: '',
        description: '',
        key: '',
        sellername: '',
        features: ''
    }
    useEffect(() => {
        fetch(`https://murmuring-sands-42782.herokuapp.com/singleProductEdit/${id}`)
            .then(res => res.json())
            .then(data => {setProducts(data);
                setProductsFeature(data[0].features)})
    }, [id])
    const product = products[0];
    const dataProduct = {...firstProduct, ...product};
    const { image, name, sellername, price, stock, key, category, description, features } = dataProduct;
    const [quantity, setQuantity] = useState(1);
    let subtotal = (price * quantity);
    const [cartProduct, setCartProduct] = useContext(CartContext);

    const addProductToCart = () => {
        let newProduct = {
            key: key,
            name: name,
            sellername: sellername,
            price: price,
            category: category,
            stock: stock,
            quantity: quantity,
            subtotal: subtotal
        }
        const toBeAdded = key;
        const sameProduct = cartProduct.find(pd => pd.key === toBeAdded);
        if (sameProduct) {
            newProduct.quantity = sameProduct.quantity + newProduct.quantity;
            newProduct.subtotal = newProduct.quantity * newProduct.price;
            const others = cartProduct.filter(pd => pd.key !== toBeAdded);
            const finalCartProduct = [...others, newProduct];
            setCartProduct(finalCartProduct);
        }
        else {
            const finalCartProduct = [...cartProduct, newProduct];
            setCartProduct(finalCartProduct);
            //setCartProduct(cartProduct=>[...cartProduct, newProduct]);
        }
        setShow(false);
    }


    const increase = () => { quantity < 22 ? setQuantity(quantity + 1) : setQuantity(quantity) }
    const decrease = () => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity) }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ts = {
        border: "1px solid black",
        padding: "10px"
    }
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <div className="product-details">
                <div className="product-details-left">
                    <img className="product-details-img" src={`data:image/png;base64,${image.img}`} alt="" />
                </div>
                <div className="product-details-right">
                    <h4 className="product-details-name">{name}</h4>
                    <br />
                    <p><small>seller: {sellername}</small></p>
                    <p>Price: ${price}</p>
                    <div>
                        <p>Quantity: <button className="icon-btn"><FontAwesomeIcon className="icon" onClick={decrease} icon={faMinus} /></button> {quantity} <button className="icon-btn"><FontAwesomeIcon className="icon" onClick={increase} icon={faPlus} /></button></p>
                    </div>
                    <p>Total Amount: {subtotal}</p>
                    <p className="product-stock"><small>In stock: {stock}</small></p>
                    {stock==="Available"?<button className="main-button" onClick={handleShow} ><FontAwesomeIcon className="icon" icon={faShoppingCart} /> Add To Cart</button>:<p>Product is not Available Now!</p>}
                    <div>
                    <Modal className="modal" show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Your Order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You ordered <span style={{color: "red"}}>{quantity}</span> Items of <span style={{color: "green"}}>{name}</span></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary"  onClick={handleClose}>   
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={addProductToCart}>
                                Confirm Now
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    </div>
                </div>
            </div>
            <div className="product-details-feature container">
                <h1>Description</h1>
                <p>{description}</p>
                <h1>Feature</h1>
            {
            productsFeature.length===0 ? <span>Plz add feature</span>:
            <div>
                {
                    productsFeature.map((feature)=>
                    <tr>
                        <td style={ts}>{feature.featuresKey}</td>
                        <td style={ts}>{feature.featuresValue}</td>
                    </tr>)
                }
            </div>
        }
            </div>
        </div>
    );
};

export default ProductDetails;