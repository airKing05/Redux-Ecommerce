import React from 'react';
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';

export default function ProductListing() {
    const product = useSelector((state) => state);
    // console.log(product);
    return (
        <div className="container">
            <SingleProduct/>
        </div>
    )
}
