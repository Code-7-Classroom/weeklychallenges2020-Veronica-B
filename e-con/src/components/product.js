import React, {useState}from 'react';
import product from '../Products.json';
import '../App.css'

const ProductCard = () => {
    const [products, setProduct]= useState(product);
    //next I need a function that will take 11-12 id and filter them out, I will create a new array

    const handleElevenToTwelve = () =>{
        let newProducts=[...products];
            newProducts=newProducts.filter(item => item.id.includes('11-12'))
            if (newProducts.length=== 0){
                let newProducts=[...product];
                newProducts=newProducts.filter(item => item.id.includes('11-12'))
                return setProduct(newProducts);
            }
            return setProduct(newProducts);
       
    }

    const handleNineToTen = () =>{
        let newProducts=[...products];
            newProducts=newProducts.filter(item => item.id.includes('9-10'))

            if (newProducts.length=== 0){
                let newProducts=[...product];
                newProducts=newProducts.filter(item => item.id.includes('9-10'))
                return setProduct(newProducts)
            }
            return setProduct(newProducts);
       
    }

    const handleGreaterThanSeven = () => {
        let newProducts=[...products];
            newProducts=newProducts.filter(item => parseFloat(item.price.slice(1))>= 7)
            console.log(newProducts.length)

            if (newProducts.length=== 0){
                let newProducts=[...product];
                newProducts=newProducts.filter(item => parseFloat(item.price.slice(1))>= 7)
                return setProduct(newProducts)
            }
            return setProduct(newProducts);
    }

    const handleLowerThanSeven = () => {
        let newProducts=[...products];
            newProducts=newProducts.filter(item => parseFloat(item.price.slice(1))<= 7)

               
            if (newProducts.length=== 0){
                let newProducts=[...product];
                newProducts=newProducts.filter(item => parseFloat(item.price.slice(1))<= 7)
                return setProduct(newProducts)
            }
            return setProduct(newProducts);

    }

    const handleReset = () =>{
        let newProducts=[...product];
        return setProduct(newProducts);
    }
    
    return (

        <React.Fragment>
            <div className="filter-box">
                <p className="filter-text">Price:</p>
                <button className="filter-button" onClick={() => handleGreaterThanSeven()}>Over $7 </button>
                <button className="filter-button" onClick={() => handleLowerThanSeven()} >Under $7</button>
                <p className="filter-text">Category:</p>
                <button className="filter-button" onClick={() => handleNineToTen()}>Grade 9-10</button>
                <button className="filter-button" onClick={() => handleElevenToTwelve()}>Grade 11-12</button>
                <p className="filter-text">Reset Filter:</p>
                <button className="filter-button filter-button__reset" onClick={() => handleReset()}>Reset</button>
            </div>

            <div className="grid">
                {products.map((item, index) => {
                    return (<div>
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
                </div>
        </React.Fragment>
    )
}



export default ProductCard;