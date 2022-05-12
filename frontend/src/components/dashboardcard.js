import React from 'react'
import "./dashboardcard.css"

function Dashboardcard({client, clickInfo}) {

    return (
        <a href="/clientpage" style={{ textDecoration: 'none' }}><div className='container' onClick={()=> clickInfo(client)}>
        <div id="cardtext">
        <h2>{client.name}</h2>
        <h3>{client.station}</h3>
        <h3>${client.budget} Total Campaign Budget</h3>
        <h3>{client.comments}</h3>
        </div>
    </div></a>
    )
}

export default Dashboardcard