import React from 'react'
import Campaigncard from '../components/campaigncard'
import './campaignpage.css'

function Campaignpage({loggedIn}) {

    let getInfo = (loggedIn ? loggedIn.clients : "")

    let displayCompany = (loggedIn ? getInfo.map(client => {
        return (
            <Campaigncard 
                key={client.id}
                client={client}
                />
        )
    }) : "" )

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

return (
    <div id="campaignpage">
        <h2>Here's what's in flight!</h2>
        <div id="cardcontainer">
            {displayCompany}
        </div>
    </div>
    )
}

export default Campaignpage