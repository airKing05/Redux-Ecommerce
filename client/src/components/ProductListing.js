import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

export default function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchApi = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data)
            dispatch(setProducts(response.data))
        } catch (error) {
            console.log(error)
        }
      
    }

    useEffect(() => {
        fetchApi();
    }, [])
    console.log("product: ", products)

 
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-4 d-flex flex-wrap">
                <SingleProduct/>
                </div>
            </div>
           
        </div>
    )
}
