class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :isci_code, :spot_time, :spot_length, :spot_preview, :comments
  has_one :client
end
