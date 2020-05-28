import React, {useState} from 'react';
import product from '../Products.json';
import productCard from './product';

const filter= () => {
    let products= <productCard/>;
        return(
        <React.Fragment>
               <div className="filter-box">
            <p className="filter-text">Price:</p>
            <button className="filter-button"> Low to High </button>
            <button className="filter-button" href="products--hightolow.html">High to Low</button>
            <p className="filter-text">Category:</p>
            <button className="filter-button" href="products--9-10.html">Grade 9-10</button>
            <button className="filter-button">Grade 11-12</button>
    </div>
        </React.Fragment>   
        )
}


export default filter