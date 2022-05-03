class Station < ApplicationRecord
    has_many :reservations
    has_many :clients, through: :reservations
    has_many :users, through: :reservations

end
