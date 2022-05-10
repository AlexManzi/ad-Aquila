class ReservationsController < ApplicationController

    def index
        res = Reservation.all
        render json: res
    end

    def create

        res = Reservation.create!(params.permit(:price, :spot_length, :dates, :spot_time, :isci_code, :client_id))
        render json: res
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors }, status:420
    end
end
