class ReservationsController < ApplicationController

    def index
        res = Reservation.all
        render json: res
    end
end
