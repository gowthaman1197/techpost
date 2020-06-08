import React from 'react'
import { Link } from 'react-router-dom'

function TrendTechList(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card mt-3 mb-3">
                <img className="card-img-top" src={props.postData.img} alt="Card image" />
                <div class="card-body text-center">
                <Link to={`/trendtech/${props.postData.url}`}><h3 className="card-title">{props.postData.title}</h3></Link>
                </div>
            </div>    
        </div>
    )
}

export default TrendTechList
