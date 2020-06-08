import React from 'react'
import TechwriterList from './TechwriterList'

function Techwriter(props) {
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <h1 className="text-center mt-3 mb-3">{props.title}</h1>
            </div>
            <TechwriterList />
        </div>
    )
}

export default Techwriter
