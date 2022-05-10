import React from 'react'
import "./dashboardcard.css"

function Dashboardcard({client, clickInfo}) {

    return (
        <a href="/clientpage" style={{ textDecoration: 'none' }}><div className='container' onClick={()=> clickInfo(client)}>
        <h2>{client.name}</h2>
    </div></a>
    )
}

export default Dashboardcard