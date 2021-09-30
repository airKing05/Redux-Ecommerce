import React from 'react';
import { useSelector } from 'react-redux';

export default function SingleProduct() {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products)
    const {id, title, category} = products[0];
    return (
        <div className="container border rounded" style={{maxWidth: '250px'}}>
            <div className="row">
                <div className="col">
                    <h4>{title} </h4>
                </div>
            </div>
        </div>
    )
}
