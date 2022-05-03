class CreateSlots < ActiveRecord::Migration[7.0]
  def change
    create_table :slots do |t|
      t.references :station, null: false, foreign_key: true
      t.integer :time
      t.integer :price
      t.integer :impressions

      t.timestamps
    end
  end
end
