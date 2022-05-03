import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {
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
            <h2>Welcome back, User!</h2>
        </div>
    </div>
  )
}

export default Dashboard