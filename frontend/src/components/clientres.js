import React from 'react'
import './clientres.css'

function Clientres({res, handleDelete}) {
  return (
    <div id="resinfo">
        <h4>{res.spot_length}</h4>
        <h4>{res.price}</h4>
        <h4>{res.spot_time}</h4>
        <h4>{res.dates}</h4>
        <h4>{res.isci_code}</h4>
        <img id="trashbin" src={require('../pics/trash.png')} onClick={() => handleDelete(res.id)}></img>
    </div>
  )
}

export default Clientres