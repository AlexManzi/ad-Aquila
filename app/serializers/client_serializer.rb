class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact_info, :reservations
  has_one :user
end
