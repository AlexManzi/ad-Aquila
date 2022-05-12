class PlanpacksController < ApplicationController
require 'stripe'

Stripe.api_key = 'sk_test_51Ku26VIrI1eSQgI561Dnnm6IjPMmCEtVAoeIp6zDxbCyy0dLtTzKVeRfCAcwqYUGidzyyEgJjyf2ObrJc8HlK1dl00PqyvbgJU'

def index
    packs = Planpack.all 
    render json: packs 
end

def add_plan
    accountAddPlan = Planpack.find(params[:id])
    session = Stripe::Checkout::Session.create({
    
        line_items: [{
    # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: accountAddPlan.stripe_id,
        quantity: 1,
    }],
    mode: 'subscription',
    success_url: "http://localhost:4000/"  + '?success=true',
    cancel_url: "http://localhost:4000/" + '?canceled=true',
  })

  render json: {url: session.url}
#   redirect session.url, 303
end

# YOUR_DOMAIN = 'http://localhost:3000'

# post '/create-checkout-session' do
#   content_type 'application/json'

end
