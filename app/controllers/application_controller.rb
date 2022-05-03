class ApplicationController < ActionController::API
    include ActionController::Cookies

#     require 'stripe'
#     set :default_content_type, 'application/json'
    
# configure do
#     enable :sessions 
#     send :session_secret, "secret"
#     end
    
#     require 'stripe'
    
# # This is your test secret API key.
# Stripe.api_key = 'sk_test_51Ku26VIrI1eSQgI561Dnnm6IjPMmCEtVAoeIp6zDxbCyy0dLtTzKVeRfCAcwqYUGidzyyEgJjyf2ObrJc8HlK1dl00PqyvbgJU'

# YOUR_DOMAIN = 'http://localhost:4000'

# post '/create-checkout-session' do
#     content_type 'application/json'
#     print "worked"

#     session = Stripe::Checkout::Session.create({
#             line_items: [{
#         # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
#         price: "price_1Kv5iiIrI1eSQgI5P5KYJqsI",
#         quantity: 1,
#     }],
#     mode: 'payment',
#     success_url: YOUR_DOMAIN + '/success',
#     cancel_url: YOUR_DOMAIN + '/failure',
#     })
#     return {url: session.url}.to_json
#     end
end
