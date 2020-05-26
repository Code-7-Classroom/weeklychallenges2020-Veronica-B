import React from 'react';
import product from '../Products.json';
import '../App.css'

class ProductCard extends React.Component{

    render(props){
    return(
        <React.Fragment>
            {product.map((item, index)=>{
                return( <div>
                 
             <section className="products">
            <img className="products__images"
                src={item.image}
                alt="book" />
            <h2 className="products__title">{item.name}</h2>
            <p className="products__paragraph">{item.description}
                <span className="products__paragraph__price">{item.price}</span>
            </p>
     
            <button className="products__button--mobile">Add to Cart</button>

        </section>
                </div>
                )
            })}
    </React.Fragment>
    )
}
}


export default ProductCard;