class ClientsController < ApplicationController
    def index 
        clients = Client.all 
        render json: clients, include: :reservations
    end

    def show
        clients = Client.find(params[:user_id])
        render json: clients, include: :reservations
    end

    def showReservationsForClient
        clients = Client.find(params[:id])
        render json: clients.reservations
    end

    def create
        client = Client.new(params.permit(:budget, :name, :station, :contact_info, :comments))
        client.user_id = session[:user_id]
        client.save
        render json: client 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors }, status:420
    end

end
