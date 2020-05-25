import React from 'react';
import product from '../Products.json';


class ProductCard extends React.Component{

    render(props){
    return(
        <React.Fragment>
            {product.map((item, index)=>{
                return( <div>
                    {item.name}
                    <br />
                    {item.image}
                    <br />
                    {item.description}
                    <br />

                    {item.price}
                </div>
                )
            })}
    </React.Fragment>
    )
}
}


export default ProductCard;