import React from 'react'
import TrendTechList from './TrendTechList'
import TrendingPostData from '../data/TrendingPostData'

function TrendTech(props) {
    const trendingDataResult = TrendingPostData.map(post => <TrendTechList key={post.id} postData={post}/>)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h1 className="text-center mt-4">{props.title}</h1>
                </div>
                {
                    trendingDataResult
                }
            </div>
        </div>
    )
}

export default TrendTech
