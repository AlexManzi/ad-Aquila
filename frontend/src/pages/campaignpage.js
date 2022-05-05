import React from 'react'
import Campaigncard from '../components/campaigncard'
import './campaignpage.css'

function Campaignpage() {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

return (
    <div id="campaignpage">
        <h2>Here's what's in flight!</h2>
        <div id="cardcontainer">
        <Campaigncard />
        <Campaigncard />
        <Campaigncard />
        <Campaigncard />
        <Campaigncard />
        <Campaigncard />
        <Campaigncard />
        </div>
    </div>
    )
}

export default Campaignpage