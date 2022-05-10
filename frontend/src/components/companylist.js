import React from 'react'
import './companylist.css'
import { Link } from 'react-router-dom'

function Companylist({client, clickInfo}) {
  return (
    <div onClick={()=> clickInfo(client)}>
        <a href="/clientpage" style={{ textDecoration: 'none' }}><h2 id="names">{client.name}</h2></a>
    </div>
  )
}

export default Companylist