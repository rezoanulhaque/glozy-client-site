import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../SharedComponent/Header';
import Search from '../SharedComponent/Search';

const Body = () => {
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
            
        </div>
    );
};

export default Body;