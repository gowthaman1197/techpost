import React from 'react'
import Avatar from '../assets/img/img_avatar_men.png'

function TechwriterIteam(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card mt-3 mb-3">
                <img className="card-img-top" src={Avatar} alt="Card image" />
                <div class="card-body text-center">
                    <h3 className="card-title">{props.writerItem.writerName}</h3>
                    <p className="card-text">{props.writerItem.content}</p>
                </div>
            </div>
        </div>
    )
}

export default TechwriterIteam
