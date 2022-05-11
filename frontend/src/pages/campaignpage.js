import React, {useState, useEffect } from 'react'
import Campaigncard from '../components/campaigncard'
import './campaignpage.css'

function Campaignpage({loggedIn}) {
    let [selectedClient, setSelectedClient] = useState(null)

    useEffect(() => {
        const data = window.localStorage.getItem('clientInfo')
        setSelectedClient(JSON.parse(data))
    }, [])
    
    useEffect(() => {
        window.localStorage.setItem('clientInfo', JSON.stringify(selectedClient))
    }, [selectedClient])
    
    
    function clickInfo(e) {
        setSelectedClient(e); 
    }

    let getInfo = (loggedIn ? loggedIn.clients : "")

    let displayCompany = (loggedIn ? getInfo.map(client => {
        return (
            <Campaigncard 
                key={client.id}
                client={client}
                clickInfo={clickInfo}
                />
        )
    }) : "" )

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