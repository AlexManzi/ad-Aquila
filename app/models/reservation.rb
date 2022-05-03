class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :client
  belongs_to :slot
  belongs_to :station

end
