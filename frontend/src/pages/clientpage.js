import React, { useState, useEffect} from 'react'
import "./clientpage.css"
import Clientres from '../components/clientres'
import Donut from '../components/donut'

function Clientpage({selectedClient, testPass}) {
  let [client, setClient] = useState(null)
  let [spotLength, setSpotLength] = useState('')
  let [spotPrice, setSpotPrice] = useState('')
  let [spotTime, setSpotTime] = useState('')
  let [isci, setIsci] = useState('')
  let [spotDate, setSpotDate] = useState('')
  let [reservations, setReservations] = useState([])

  let clientName = (client ? client.name : "")
  let clientBudget = (client ? client.budget : "")
  let clientContact = (client ? client.contact_info : "")
  let clientReservations = (client ? client.reservations : "")
  let clientStation = (client ? client.station : "")
  let clientComments = (client ? client.comments : "")
  let clientId = (client ? client.id : "" )
  let priceArr = []
  let sum = 0

  useEffect(() => {
    const data = window.localStorage.getItem('clientInfo')
    setClient(JSON.parse(data))
  }, [])

  useEffect(() => {
    let ternary = (client ? fetch(`/api/clientReservations/?id=${clientId}`, {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      }
      })
      .then(resp => resp.json())
        .then(response => setReservations(response)) : "")
  }, [clientId])
    
  let resInfo = (client ? reservations.map(res => {
    return (
      <Clientres 
        key={res.id}
        res={res}
        handleDelete={handleDelete}
        formatPrice={formatPrice}
        />
    )
  }) : "")

  let getsClientBudget = reservations.forEach(res => {
    priceArr.push(res.price)
    })

  for (let i = 0; i < priceArr.length; i++) {
    sum += priceArr[i]
  }
  console.log(sum)
  console.log(clientBudget)
  let startingBudget = clientBudget
  let totalBudget = (clientBudget - sum);


let ringChart = <Donut
              startingBudget={startingBudget}
              totalBudget={totalBudget}
              />


  
  function formatPrice(dollars){
    return dollars.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  function addReservation(e) {
      e.preventDefault();
        fetch("/api/reservations", {
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
              spot_preview: spotDate
            })
            })
            .then(resp => resp.json()
            .then(r => window.location.reload())
  )}

  function handleDelete(id) {
    fetch(`/api/reservations/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    window.location.reload();
  }

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
      <h2 className='clientInfo'>Your Campaign {clientName}</h2>
      <h3 className='clientInfo'>Is Running on {clientStation}</h3>
      <h3 className='clientInfo'>Your Total Budget is: ${formatPrice(startingBudget)}, your remaining budget is: {formatPrice(totalBudget)}</h3>
      <h3 className='clientInfo'>For any issues reach out to {clientContact}</h3>
      <h3 className='clientInfo'>{clientComments}</h3>
      {getsClientBudget}
      </div>
      <div id="clientSuperParent">
      <div id="clientresparent">
        <h3>Spot Length</h3>
        <h3>Spot Price</h3>
        <h3>Spot Time</h3>
        <h3>Spot Date</h3>
        <h3>ISCI</h3>
        <h3>Delete</h3>
      </div>
      {resInfo}
      </div>
        <div id="resinfopost">
          <h3 id="adADDheading">Enter a new ad placement</h3>
          <input onChange={handleSetLength} className="resinput" placeholder="Enter Spot Length"></input>
          <input onChange={handleSetPrice} className="resinput" placeholder="Enter Spot Price" type="number"></input>
          <input onChange={handleSetTime} className="resinput" placeholder="Enter Spot Time" type="time" step="1"></input>
          <input onChange={handleSetDate} className="resinput" placeholder="Enter Spot Date" type="date"></input>
          <input onChange={handleSetIsci} className="resinput" placeholder="Enter ISCI Code"></input>
          <button onClick={addReservation} id="flightBtn">Add To Flight</button>
        </div>
    </div>
  )
}

export default Clientpage