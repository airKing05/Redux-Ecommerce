import React from 'react';
import homeImg from '../img/homeImg.jpg';
import bigPoster2 from '../img/bigPoster2.jpg';
import smallPoster1 from '../img/smallPoster1.jpg';
import smallPoster2 from '../img/smallPoster2.jpg';


export default function Home() {
    return (
        <div className="container pt-2" style={{paddingLeft: '0px !important'}}>
            <img src={homeImg} alt="homeImg" className="img-fluid"/>
            <div className="row pt-3">
                <div className="col">
                    <img src={smallPoster1} alt="smallPoster" className = " img-fluid "/>
                </div>
                <div className="col">
                    <img src={smallPoster2} alt="smallPoster" className = " img-fluid "/>
                </div>
            </div>
            <img src ={bigPoster2} alt="big-poster" className = " img-fluid my-2" />
        </div>
    )
}
