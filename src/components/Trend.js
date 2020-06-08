import React from 'react'
import { Link } from 'react-router-dom'

function Trend(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/trendtech/" className="btn btn-primary mt-4">Back</Link>
                </div>
                <div className="col-12 col-sm-12 col-md-10 offset-1 col-lg-10 offset-1">
                    <h1 className="mt-3 mb-4 text-center">{props.trendProp.title}</h1>
                    <img src={props.trendProp.img} alt={props.trendProp.title} className="img-fluid"/>
                    <p className="mt-3 mb-3 text-justify">{props.trendProp.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Trend
