import React from 'react'
import LosAngeles from '../assets/img/la.jpg'
import Chicago from '../assets/img/chicago.jpg'
import NewYork from '../assets/img/ny.jpg'
function Slider() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
        
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={LosAngeles} alt="Los Angeles" className="img-fluid" height="500" />
                </div>
                <div className="carousel-item">
                    <img src={Chicago} alt="Chicago" className="img-fluid" height="500" />
                </div>
                <div className="carousel-item">
                    <img src={NewYork} alt="New York" className="img-fluid" height="500" />
                </div>
            </div>
        
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}

export default Slider
