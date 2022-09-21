import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryProduct from '../SharedComponent/CategoryProduct';
import Header from '../SharedComponent/Header';
import HotSale from '../SharedComponent/HotSale';
import Recent from '../SharedComponent/Recent';
import Search from '../SharedComponent/Search';
import Splides from '../SharedComponent/Splides';
import TrendingProduct from '../SharedComponent/TrendingProduct';

const Home = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const categorySubmit = (categoryName, e) => {
        console.log('hi');
        history.push(`/body/${categoryName}`);
        console.log('hi2');
        fetch(`https://limitless-peak-48675.herokuapp.com/categorySubmit?category=${categoryName}`)
            .then(res => res.json())
            .then(data => setProducts(data))
      };
    return (
        <div>
            <Header></Header>
            <Search categorySubmit={categorySubmit}></Search>
            <Splides></Splides>
            <CategoryProduct></CategoryProduct>
            <TrendingProduct></TrendingProduct>
            <HotSale></HotSale>
            <Recent></Recent>
        </div>
    );
};

export default Home;