class User < ApplicationRecord
    has_secure_password
    has_many :clients
    has_many :reservations, through: :clients
end
