class Client < ApplicationRecord
    has_many :reservations
    has_many :slots, through: :reservations
    has_many :users, through: :reservations
end
