import React from 'react';
import notFound from '../img/notFound.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="container mt-5">
            <img src={notFound} alt="not-found-img" />
            <h3 className="mt-3"> oh! you made a mistake, page not exist </h3>
            <Link to='/'>
            <button className="btn btn-outline-primary btn-lg mt-3 pt-0"> <strong style={{fontSize: '28px'}}> &#x2190; </strong> Go Bake to Home</button>
            </Link>
        </div>
    )
}

