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
          <div id="homebuttons">
          <Link to="/signup" style={{textDecoration:"none"}}><button id="signuphome">Sign Up!</button></Link>
          <a href="https://calendly.com/adaquila/15min" target="_blank"><button id="signuphome1">Request a Demo!</button></a>
          </div>
          </div>
            <img src={require('../pics/homedisplay.png')} alt="demo" id="homepic"></img>
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
          <div id="bottominfo">
          <div id="emailbar">
            <h3 id="emaillist">Subscribe to our Email List!</h3><button id="joinButton">Join Now</button>
          </div>
          <div id="bottombar">
            <p>About Us</p>
            <p>Contact</p>
            <p>Reviews</p>
            <p>Legal</p>
            <p>Request a Demo</p>
            <p>FAQ</p>
            <p>See Additional Products</p>
            <p>Github</p>
          </div>
          </div>
    </div>
  )
}

export default Home