import React from 'react'
import './campaigncard.css'

function Campaigncard({client}) {

  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  return (
    <div id="campaigncard">
        <h2>{client.name}</h2>
        <h3>Ad Provider</h3>
        <h4>Update</h4>
        <h4>Make a comment</h4>
    </div>
  )
}

export default Campaigncard