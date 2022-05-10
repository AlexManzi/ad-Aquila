require 'stripe'
require 'sinatra'

# This is your test secret API key.
Stripe.api_key = 'sk_test_51Ku26VIrI1eSQgI561Dnnm6IjPMmCEtVAoeIp6zDxbCyy0dLtTzKVeRfCAcwqYUGidzyyEgJjyf2ObrJc8HlK1dl00PqyvbgJU'

set :static, true
set :port, 4242

YOUR_DOMAIN = 'http://localhost:3000'

post '/create-checkout-session' do
  content_type 'application/json'

  session = Stripe::Checkout::Session.create({
    line_items: [{
      # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
      price: 'price_1Kv5iiIrI1eSQgI5P5KYJqsI',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: YOUR_DOMAIN + '?success=true',
    cancel_url: YOUR_DOMAIN + '?canceled=true',
  })
  redirect session.url, 303
end