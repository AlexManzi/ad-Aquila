import React, {useState, useEffect} from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'
import Dashboardcard from '../components/dashboardcard'
import Clientpage from './clientpage'
import Companylist from '../components/companylist'

function Dashboard({loggedIn}) {

  let [selectedClient, setSelectedClient] = useState(null)

  let guestName = (loggedIn ? loggedIn.first_name : "")
  let infoTest = (loggedIn ? loggedIn.clients : "")
  let guestOrg = (loggedIn ? loggedIn.organization : "")

  let mappedArray = (loggedIn ? infoTest.map(client => {
        return (
          <Companylist 
          key={client.id}
          client={client}
          clickInfo={clickInfo}
            />
        )
  }) : "" )

  let smallArrayVariable = infoTest
  let smallArray = (loggedIn ? smallArrayVariable.slice(0,2) : "")

  let mappedSmallArray = (loggedIn ? smallArray.map(client => {
        return (
          <Dashboardcard 
          key={client.id}
          client={client}
          clickInfo={clickInfo}
          />
        )
  }) : "")

  useEffect(() => {
    const data = window.localStorage.getItem('clientInfo')
    setSelectedClient(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('clientInfo', JSON.stringify(selectedClient))
  }, [selectedClient])


  function clickInfo(e) {
    setSelectedClient(e); 
  }



  console.log(selectedClient)


  return (
    <div id="wholedashboard">
        <div id="campaignsummary">
            <h1>Today's Campaigns</h1>
            <div id="quicklookcontainer">
              {mappedSmallArray}
            </div>
            <div id="btncontainer">
            <Link to="/campaigns" style={{textDecoration:"none"}}><h2 id="allaccountsbtn">View All Campaigns →</h2></Link>
            </div>
        </div>
        <div id="campaignbio">
            <h2>Welcome back, {guestName}!</h2>
            <h3>How is {guestOrg} doing today? </h3>
            <br></br>
            <div id="clientlist">
            <h2>Active Clients</h2>
            {mappedArray}
            </div>
        </div>
    </div>
  )
}

export default Dashboard