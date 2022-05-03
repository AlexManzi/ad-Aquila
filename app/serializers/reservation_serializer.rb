class ReservationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :client
  has_one :slot
  has_one :station
end
