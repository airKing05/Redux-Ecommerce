import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function SingleProduct() {
    const products = useSelector((state) => state.allProducts.products);
    // console.log(products)
    // const {id, title, category} = products[0];
    return (
        <div>
           
            {
                products.map((product)=>{
                    const {id, title, price, description, category, image} = product;

                    return(
                       
                        <div className="container border rounded mx-2 my-2 px-2 py-2  d-flex justify-content-start cursor-pointer " style={{maxWidth: '270px'}} key={id}>
                             <Link to={`/product/${id}`}>
                        <div className="row">
                            <div className="col text-center">
                              <img src={image} alt="single-product-img" style={{maxWidth: '150px'}}/>
                                <h4>{title} </h4>
                                <h5>{price}</h5>
                                <p>{category}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                    )
                })
            }
           
        </div>
       
    )
}
