class AddCommentsToClients < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :comments, :string
    add_column :clients, :station, :string
  end
end
