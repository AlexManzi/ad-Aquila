class User < ApplicationRecord
    has_secure_password
    has_many :reservations
    has_many :slots, through: :reservations
    has_many :clients, through: :reservations
    has_many :stations, through: :reservations

    validates_presence_of :email 
end
