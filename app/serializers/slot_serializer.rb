class SlotSerializer < ActiveModel::Serializer
  attributes :id, :time, :price
  has_one :station
end
