import React from 'react'
import {Route} from 'react-router-dom'
import TrendingPostData from '../data/TrendingPostData'
import Trend from './Trend'
import TrendTech from './TrendTech';
function TrendContainer() {
    let trendContainerResult = TrendingPostData.map((trend) => <Route path={`/trendtech/${trend.url}`} render={()=><Trend trendProp={trend}/>}/>);
    return (
        <React.Fragment>
            <Route exact path="/trendtech" render={() => <TrendTech title="Trending Post"/>}/>
            {
                trendContainerResult
            }
        </React.Fragment>
    )
}

export default TrendContainer
