import React from 'react'
import './pricing.css'


function Pricing() {

// function handleCheckout(){
//     fetch('http://localhost:3000/create-checkout-session',{
//         method: "POST",
//         headers: {'Content-Type': 'application/json'}, 
//         body: JSON.stringify({
//             price: 'prod_LQKKfH7pFt4BQq'
//         }),
//         credentials: "same-origin",
//         })
//         .then(resp=> resp.json())
//         .then(data=>{
//         window.location.href = data.url;
//         })
//         .catch(error => {
//         })
//     }

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
            <form action="/create-checkout-session" method="POST">
                <button id="Pbutton" type="submit">
                    Buy Now
                    </button>
            </form>
            <hr className='priceline'></hr>
        </div>
        <div className="priceoption" id="constitution">
            <h2>Small Business</h2>
            <div>
                <h1>$100</h1>
                <p>per month</p>
            </div>
            <p>For businesses that want to sucessfully visualize campaigns</p>
            <button id="Bbutton">Buy Now</button>
            <hr className='priceline'></hr>
        </div>
        <div className="priceoption" id="enterprise">
            <h2>Enterprise Level</h2>
            <div>
                <h1>$125</h1>
                <p>per month</p>
            </div>
            <p>For large companies that need to manage many accounts</p>
            <button id="Ebutton">Buy Now</button>
            <hr className='priceline'></hr>
        </div>
    </div>
    </div>
    )
}

export default Pricing