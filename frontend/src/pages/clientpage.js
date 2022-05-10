import React, { useState, useEffect} from 'react'
import "./clientpage.css"
import Clientres from '../components/clientres'

function Clientpage({selectedClient}) {
  let [client, setClient] = useState(null)
  let [spotLength, setSpotLength] = useState('')
  let [spotPrice, setSpotPrice] = useState('')
  let [spotTime, setSpotTime] = useState('')
  let [isci, setIsci] = useState('')
  let [spotDate, setSpotDate] = useState('')
  let [reservations, setReservations] = useState([])

  console.log(spotDate)
  
  let clientId = (client ? client.id : "" )

  useEffect(() => {
    const data = window.localStorage.getItem('clientInfo')
    setClient(JSON.parse(data))
  }, [])

  useEffect(() => {
    let ternary = (client ? fetch(`/clientReservations/?id=${clientId}`, {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      }
      })
      .then(resp => resp.json())
        .then(response => setReservations(response)) : "")
  }, [clientId])
    

  console.log(clientId)

  let clientName = (client ? client.name : "")
  let clientBudget = (client ? client.budget : "")
  let clientContact = (client ? client.contact_info : "")
  let clientReservations = (client ? client.reservations : "")
  let clientStation = (client ? client.station : "")
  let clientComments = (client ? client.comments : "")
  

  let resInfo = (client ? reservations.map(res => {
    return (
      <Clientres 
        key={res.id}
        res={res}
        />
    )
  }) : "")

  function addReservation(e) {
      e.preventDefault();
        fetch("/reservations", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              spot_length: spotLength,
              price: spotPrice,
              spot_time: spotTime,
              isci_code: isci,
              client_id: clientId,
              dates: spotDate
            })
            })
            .then(resp => resp.json()
            .then(r => window.location.reload())
            )}
              

    console.log(reservations)



  function handleSetLength(e) {
    setSpotLength(e.target.value)
  }

  function handleSetPrice(e) {
    setSpotPrice(e.target.value)
  }

  function handleSetTime(e) {
    setSpotTime(e.target.value)
  }

  function handleSetIsci(e) {
    setIsci(e.target.value)
  }

  function handleSetDate(e) {
    setSpotDate(e.target.value)
  }

  return (
    <div id="wholerespage">
    <div id="respage">
      <h2 className='clientInfo'>{clientName}</h2>
      <h3 className='clientInfo'>{clientStation}</h3>
      <h3 className='clientInfo'>{clientBudget}</h3>
      <h3 className='clientInfo'>{clientContact}</h3>
      <h3 className='clientInfo'>{clientComments}</h3>
      </div>
      <div id="clientSuperParent">
      <div id="clientresparent">
        <h3>Spot Length</h3>
        <h3>Spot Price</h3>
        <h3>Spot Time</h3>
        <h3>Spot Date</h3>
        <h3>ISCI</h3>
      </div>
      {resInfo}
      </div>
        <div id="resinfopost">
          <input onChange={handleSetLength} className="resinput" placeholder="Enter Spot Length"></input>
          <input onChange={handleSetPrice} className="resinput" placeholder="Enter Spot Price"></input>
          <input onChange={handleSetTime} className="resinput" placeholder="Enter Spot Time" type="time" step="1"></input>
          <input onChange={handleSetDate} className="resinput" placeholder="Enter Spot Date" type="date"></input>
          <input onChange={handleSetIsci} className="resinput" placeholder="Enter ISCI Code"></input>
          <button onClick={addReservation} id="flightBtn">Add To Flight</button>
        </div>
    </div>
  )
}

export default Clientpage