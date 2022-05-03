class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true
      t.references :slot, null: false, foreign_key: true
      t.references :station, null: false, foreign_key: true

      t.timestamps
    end
  end
end
