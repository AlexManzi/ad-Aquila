import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard({loggedIn}) {

  let guestName = (loggedIn ? loggedIn.first_name : "")
  let infoTest = (loggedIn ? loggedIn.clients : "")

  let mappedArray = (loggedIn ? infoTest.map(client => {
        return (
          <h2>{client.name}</h2>
        )
  }) : "" )

  console.log(loggedIn)

  return (
    <div id="wholedashboard">
        <div id="campaignsummary">
            <h1>Today's Campaigns</h1>
            <div id="quicklookcontainer">
                <div className='container'>
                </div>
                <div className='container'>
                </div>
            </div>
            <div id="btncontainer">
            <Link to="/campaigns" style={{textDecoration:"none"}}><h2 id="allaccountsbtn">View All Campaigns →</h2></Link>
            </div>
        </div>
        <div id="campaignbio">
            <h2>Welcome back, {guestName} !</h2>
            {mappedArray}
        </div>
    </div>
  )
}

export default Dashboard