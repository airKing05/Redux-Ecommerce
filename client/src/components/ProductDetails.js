import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProductDetails() {
    const {productId} = useParams();

    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log('single product details', response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductDetail();
    }, [])
    console.log(productId)
    return (
        <div>
            single product details {productId}
        </div>
    )
}
