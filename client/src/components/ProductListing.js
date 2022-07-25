import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
import { fetchProducts } from '../redux/actions/productActions';

export default function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    console.log("product: ", products)


    return (
        <div className="container ">
            <SingleProduct />
        </div>
    )
}
