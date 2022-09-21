import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../App';
import CartProduct from '../SharedComponent/CartProduct';
import Header from '../SharedComponent/Header';

const Cart = () => {
    const [cartProduct, setCartProduct] = useContext(CartContext);
    const total = cartProduct.reduce((total, prd) => total+prd.price*prd.quantity, 0);
    const history = useHistory();
    const handleProceedCheckout = () =>{
        history.push('/shipment');
    }
   
    const removeFromCart = (key) => {
        const newCartProduct = cartProduct.filter(pd => pd.key !== key);
        setCartProduct(newCartProduct);
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="cart-row">
                    <h4 className="cart-element-1" >name</h4>
                    <h4 className="cart-element-2" >quantity </h4>
                    <h4 className="cart-element-3" >price</h4>
                    <h4 className="cart-element-4" >subtotal </h4>
                    <h4 className="cart-element-5" >discard </h4 >
                </div>
                <div>
                    {cartProduct.map(pd => <CartProduct key={pd.key} product={pd} removeFromCart={removeFromCart} ></CartProduct>)}
                </div>
                <div className="cart-end">
                    <h4 className="cart-end-element-1" >Total Amount</h4>
                    <h4 className="cart-end-element-2" >{ total } Tk</h4>
                </div>
                <div style={{textAlign: 'right', paddingBottom: '30px 20px 100px'}}>
                    <button className="proceed-btn" onClick={handleProceedCheckout}>Proceed</button>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;