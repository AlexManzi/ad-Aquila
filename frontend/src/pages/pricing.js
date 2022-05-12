import React from 'react'
import './pricing.css'


function Pricing() {

function HandleCheckout(id){
    console.log(id)
    fetch("/create-checkout-session",{
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            id,
        }),
        })

        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    window.location.href = data.url;
                })
            }
        })
    }

    return (
    <div id="pricingpage">
        <h2 id="heading">Choose the best plan for your business</h2>
    <div id="pricingpage1">
        <div className="priceoption" id="defiant">
            <h2>Personal Use</h2>
            <div>
                <h1>$75</h1>
                <p>per month</p>
            </div>
            <p>For personal use and managing a few accounts</p>
                <button id="Pbutton" onClick={() => HandleCheckout(1)}>
                    Buy Now
                    </button>
            <hr className='priceline'></hr>
        </div>
        <div className="priceoption" id="constitution">
            <h2>Small Business</h2>
            <div>
                <h1>$100</h1>
                <p>per month</p>
            </div>
            <p>For businesses that want to sucessfully visualize campaigns</p>
            <button id="Bbutton" onClick={() => HandleCheckout(2)}>Buy Now</button>
            <hr className='priceline'></hr>
        </div>
        <div className="priceoption" id="enterprise">
            <h2>Enterprise Level</h2>
            <div>
                <h1>$125</h1>
                <p>per month</p>
            </div>
            <p>For large companies that need to manage many accounts</p>
            <button id="Ebutton" onClick={() => HandleCheckout(3)}>Buy Now</button>
            <hr className='priceline'></hr>
        </div>
    </div>
    </div>
    )
}

export default Pricing