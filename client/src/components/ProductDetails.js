import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, removeSelectedProduct } from '../redux/actions/productActions';


export default function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    const { id, title, image, category, description, price, rating } = product;

    // const fetchSingleProductDetail = async () => {
    //     try {
    //         const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //         console.log('single product details', response.data)
    //         dispatch(selectedProduct(response.data))
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    useEffect(() => {
        if (productId && productId !== " "){
            dispatch(fetchProduct(productId));
            return () => {
                dispatch(removeSelectedProduct());
            }
        }
    }, [productId])
    console.log(productId)
    return (
        <div>
             {Object.keys( product).length === 0 ?
                    <div style={{ fontSize: '25px', fontWeight: '500' }}>...Loading</div>
                     :
                    <div className="container my-4" style={{ maxWidth: '800px' }}>
                        <div className="row">
                            <div className="col-md-6 border d-flex align-items-center justify-content-center">
                                <img src={image} alt="single-product-img " className="img-fluid " style={{ maxWidth: '250px' }} />
                            </div>
                            <div className="col-md-6 border">
                                <h4 className="mt-2 mb-3" style={{ fontSize: '25px' }}>{title}</h4>
                                
                                <div className=" mt-5" style={{ background: '#005584', fontWeight: '700', fontSize: '20px', padding: '5px 10px', width: '150px' }}>$ {price}</div>
                                <div className="mt-4" style={{ background: '#edf0f2', fontWeight: '600', fontSize: '15px', padding: '5px 10px', width: '70px' }}> &#11088; {rating.rate}</div>
                                
                                <div className="mt-3" style={{ background: '#61b0e6', fontWeight: '500', fontSize: '18px', padding: '5px 10px', textTransform: 'capitalize' }}>{category}</div>
                                <div className="mt-4" style={{ fontSize: '15px', fontWeight: '500' }}>{description}</div>
                                <button className="btn btn-success mt-4 mb-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>
}
        </div>
    )
}
