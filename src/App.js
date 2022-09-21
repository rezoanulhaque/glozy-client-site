import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Nomatch from './Components/Nomatch';
import AddProduct from './AdminDashBoard/AddProduct/AddProduct';
import CustomerOrder from './AdminDashBoard/CustomerOrder/CustomerOrder';
import ProductList from './AdminDashBoard/ProductList/ProductList';
import PrivateRoute from './Components/PrivateRoute';
import ProductEdit from './AdminDashBoard/ProductList/ProductEdit';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Shipment from './Components/Shipment';
import CustomerDetails from './UserDashBoard/CustomerDetails';
import Body from './Components/Body';
export const UserContext = createContext ();
export const CartContext = createContext();

function App() {
  const [allData,setAllData] = useState({});
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <UserContext.Provider value={[allData,setAllData]}>
    <CartContext.Provider value={[cartProduct, setCartProduct]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/productDetails/:id">
              <ProductDetails></ProductDetails>
          </Route>
          <Route path="/cart">
              <Cart></Cart>
          </Route>
          <Route path="/body/:ca">
              <Body></Body>
          </Route>
          <PrivateRoute path="/shipment">
              <Shipment></Shipment>
          </PrivateRoute>
          <PrivateRoute path="/productEdit/:id">
              <ProductEdit></ProductEdit>
          </PrivateRoute>
          {/* <Route path="/product/:_id">
            <ProductDetails></ProductDetails>
          </Route> */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/customerOrder">
            <CustomerOrder ></CustomerOrder>
          </PrivateRoute>
          <PrivateRoute path="/productList">
            <ProductList></ProductList>
          </PrivateRoute>
          <PrivateRoute path="/customerdetails">
              <CustomerDetails></CustomerDetails>
            </PrivateRoute>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  </UserContext.Provider>
  );
}

export default App;
