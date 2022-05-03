class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact_info, :budget
end
