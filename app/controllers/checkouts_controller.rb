class CheckoutsController < ApplicationController
    before_action :authenticate_user!

    def show
        current_user.processor = :stripe
        current_user.customer 

        @checkout_session = current_current_user.payment_processor.checkout(
            mode: 'payment',
            line_items: "price_1Kv5iiIrI1eSQgI5P5KYJqsI"
        )
    end
end
