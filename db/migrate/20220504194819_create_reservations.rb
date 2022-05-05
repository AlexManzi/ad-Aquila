class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.integer :price
      t.string :isci_code
      t.string :spot_time
      t.integer :spot_length
      t.string :spot_preview
      t.string :comments
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
