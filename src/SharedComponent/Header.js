import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from "react-router-dom";
import './../App.scss';
import Logo from './../images/glozy.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [cartProduct] = useContext(CartContext);
    const numberOfProducts = cartProduct.reduce((total, prd) => total + prd.quantity, 0);
    let user = {
        email: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    return (
        <div className="container">
            <div className="header-component">
                <div className="header-component-left">
                    <p className="link-home"><Link /*onClick={props.reLoad}*/ to="/home"><img src={Logo}/></Link></p>
                </div>
                <div className="header-component-right">
                    <p className="link-cart">
                        <Link to="/cart" style={{padding: "5px", color: "black", position: "relative", textDecoration: "none"}}>
                            <FontAwesomeIcon className="icon" style={{color: "#0E6CAA"}} icon={faShoppingCart} />
                                <span style={{color: "red", position: "absolute", bottom: "12px", fontWeight: 'bold'}}>
                                    {numberOfProducts}
                                </span>
                            </Link>
                        </p>
                    <p className="link-login">
                        {finalUser.email ? 
                        <Link to="/customerdetails" style={{ padding: "5px", marginLeft: '20px', color: "black", textDecoration: "none" }}>
                            <span>{finalUser.displayName}</span>
                            </Link>
                            : <Link to="/login" style={{ padding: "5px", marginLeft: '20px', color: "#0E6CAA", textDecoration: "none" }}>
                                <span style={{border: "1px solid #0E6CAA", padding: "2px 6px", borderRadius: "5px" }}>Login</span>
                                </Link>}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;