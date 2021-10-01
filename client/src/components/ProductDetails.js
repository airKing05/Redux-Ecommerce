import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProductDetails() {
    const {productId} = useParams();
    console.log(productId)
    return (
        <div>
            single product details {productId}
        </div>
    )
}
