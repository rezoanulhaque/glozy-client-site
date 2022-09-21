import React from 'react';
import { Link } from "react-router-dom";


const AdminHeader = () => {
    let user = {
        email: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    console.log(finalUser)

    return (
        <div>
            <h1 style={{ textAlign: "center", fontSize: "70px" }}>Glozy</h1>
            <div style={{ backgroundColor: "gray" }}>
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/admin" className="nav-link" style={{ padding: "5px", marginRight: '20px', color: "white" }}>Add Product</Link></li>
                            <li className="nav-item"><Link to="/customerOrder" className="nav-link" style={{ padding: "5px", marginRight: '20px', color: "white", position: "relative" }}>Order</Link></li>
                            <li className="nav-item"><Link to="/productList" className="nav-link" style={{ padding: "5px", marginRight: '20px', color: "white" }}>Product List</Link></li>
                            <li className="nav-item">
                                {finalUser.email ? <Link to="/customerdetails" className="nav-link" style={{ padding: "5px", marginRight: '20px', color: "white" }}><span>{finalUser.displayName}</span></Link>
                                    : <Link to="/login" className="nav-link" style={{ padding: "5px", marginRight: '20px', color: "white" }}>Login</Link>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AdminHeader;
// import React, { useContext } from 'react';
// import { UserContext } from '../../../App';

// const AdminHeader = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     return (
//         <div>
//            <h1>welcome to</h1>
//            <h2>{loggedInUser.name}</h2> 
//            <h3>{loggedInUser.email}</h3>
//         </div>
//     );
// };

// export default AdminHeader;