class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users, include: :clients
    end

    def create
        user = User.create!(params.permit(:email, :organization, :password, :first_name, :last_name))
        session[:user_id] ||= user.id 
        render json: user, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end

    def show
        user_id = session[:user_id]
        if user_id 
            user = User.find(user_id)
            render json: user, include: :clients, status: :created
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end
    
end
