class PlanpackSerializer < ActiveModel::Serializer
  attributes :id, :stripe_id, :name
end
