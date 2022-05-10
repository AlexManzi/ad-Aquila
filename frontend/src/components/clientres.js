import React from 'react'
import './clientres.css'

function Clientres({res}) {
  return (
    <div id="resinfo">
        <h4>{res.spot_length}</h4>
        <h4>{res.price}</h4>
        <h4>{res.spot_time}</h4>
        <h4>{res.dates}</h4>
        <h4>{res.isci_code}</h4>
    </div>
  )
}

export default Clientres