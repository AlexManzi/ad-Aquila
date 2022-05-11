import React from 'react'
import timeFormatter from '24hto12hformat';
import './clientres.css'

function Clientres({res, handleDelete, formatPrice, formatTime}) {
  console.log(res)
  return (
    <div id="resinfo">
        <h4 id="spotlength">:{res.spot_length}</h4>
        <h4>{formatPrice(res.price)}</h4>
        <h4 id="spottime">{timeFormatter(res.spot_time)}</h4>
        <h4 id="spotdate">{res.spot_preview}</h4>
        <h4>{res.isci_code}</h4>
        <img id="trashbin" src={require('../pics/trash.png')} onClick={() => handleDelete(res.id)}></img>
    </div>
  )
}

export default Clientres