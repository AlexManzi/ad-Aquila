import React from 'react'
import './campaigncard.css'

function Campaigncard({client, clickInfo}) {
  const colors = ["palevioletred", "red", "green", "blue", "yellow", "orange", "pink", "aqua"];

  function getUniqueFromRange(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  };

  function getRandomItem(items) {
    return items[getUniqueFromRange(0, items.length)];
  };
  
  
  return (
    <div id="campaigncard" onClick={()=> clickInfo(client)} style={{background: getRandomItem(colors)}}>
        <a href="/clientpage" style={{ textDecoration: 'none' }}><h2 className='campCard'>{client.name}</h2>
        <h3 className='campCard'>{client.station}</h3>
        <h4 className='campCard'>Update</h4>
        <h4 className='campCard'>{client.comments}</h4></a>
    </div>
  )
}

export default Campaigncard