class ClientsController < ApplicationController
    def index 
        clients = Client.all 
        render json: clients, include: :reservation
    end

    def show
        clients = Client.find(params[:user_id])
        render json: clients, include: :reservation
    end
end
