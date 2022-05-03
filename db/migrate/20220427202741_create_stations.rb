class CreateStations < ActiveRecord::Migration[7.0]
  def change
    create_table :stations do |t|
      t.string :name
      t.string :contact_info

      t.timestamps
    end
  end
end
