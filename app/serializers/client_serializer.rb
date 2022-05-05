class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact_info, :reservation
  has_one :user
end
