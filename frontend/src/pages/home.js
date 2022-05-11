import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div id="homepage">
        <div id="textParent">
          <div>
          <h1>Unleash Your Brand's Hidden Potential</h1>
          <p>Our all-in-one social media management platform unlocks the full potential of social to transform not just your marketing strategy—but every area of your organization.</p>
          <Link to="/signup" style={{textDecoration:"none"}}><button id="signuphome">Sign Up!</button></Link>
          </div>
          <h2>Good Vibes</h2>
          </div>
          <div id="infobar">
            <div id="wordout"><img src={require('../pics/wordout2.png')} alt="demo" id="demopic"></img><p className='bartext'>Our easily accessible platform allows you and your team to easily manage campaigns across all forms of media</p></div>
            <div id="analytics"><img src={require('../pics/analytics.png')} alt="demo" id="demopic"></img><p className='bartext'>Use Analytics to monitor allocations and create orders for future campaigns</p></div>
            <div id="service"><img src={require('../pics/service.png')} alt="demo" id="demopic"></img><p className='bartext'>Our designated customer service team works around the clock to make sure your business' needs are met and exceeded</p></div>
          </div>
          <div id="infobar2">
            <h2 id="cliente">Reach a new clientele</h2>
            <p id="capabilities">Plan, schedule and deliver upon allocations teamwide with cross-network publishing</p>
            <br></br>
            <Link to="/pricing" style={{textDecoration:"none"}}><p id="seefeatures">See our Features →</p></Link>
          </div>
          <div id="imgbackground">
          </div>
          <img src={require('../pics/demo.png')} alt="demo" id="demopic1"></img>
    </div>
  )
}

export default Home