import React, {useState, useEffect} from 'react'
import "./placeabuy.css"

function Placeabuy() {
    let [campClient, setCampClient] = useState('')
    let [station, setStation] = useState('')
    let [totBudget, setTotBudget] = useState('')
    let [contactInfo, setContactInfo] = useState('')
    let [comments, setComments] = useState('')

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        }  
    )

    function handleAddClient(e) {
        e.preventDefault();
        fetch("/clients", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            budget: totBudget,
            name: campClient,
            station: station,
            contact_info: contactInfo,
            comments: comments
            })
            })
            .then(resp => resp.json())
            .then (resp => window.location.reload())
        }

    function handleSetClient(e) {
        setCampClient(e.target.value)
    }

    function handleSetStation(e) {
        setStation(e.target.value)
    }

    function handleSetTotBudget(e) {
        setTotBudget(e.target.value)
    }

    function handleSetContactInfo(e) {
        setContactInfo(e.target.value)
    }

    function handleSetComments(e) {
        setComments(e.target.value)
    }

    return (
    <div id="buypage">
        <div id="buyform">
            <h2 id="buyheading">Enter Your Ad Campaign Information Here</h2>
            <div id="buyinputs">
            <input className="buyinputs" onChange={handleSetClient} placeholder='Enter The Campaign Client'></input>
            <input className="buyinputs" onChange={handleSetStation} placeholder='Enter The Station Provider'></input>
            <input className="buyinputs" onChange={handleSetTotBudget} placeholder='Enter The Total Budget The Campaign'></input>
            <input className="buyinputs" onChange={handleSetContactInfo} placeholder='Enter The The Contact Info For The Buy'></input>
            </div>
            <div id="bottombuttons">
            <input onChange={handleSetComments} placeholder='Enter Any Comments For This Buy' id="commentsbar"></input>
            <button id="addButton"onClick={handleAddClient}>Add This Campaign!</button>
            </div>
        </div>
    </div>
)
}

export default Placeabuy