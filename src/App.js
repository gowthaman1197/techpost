import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Nav,Footer} from './components'
import Home from './components/Home'
import Contact from './components/Contact'
import TrendContainer from './components/TrendContainer'

function App() {
    return (
        <BrowserRouter>
            <div className="website">
                <Nav />
                {/* <Home />           */}
                <Route exact path="/" component={Home}/>
                <Route path="/trendtech" render={() => <TrendContainer title="Trending Post"/>} />
                <Route path="/contact" render={() => <Contact />} />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
