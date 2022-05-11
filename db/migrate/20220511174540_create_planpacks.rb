class CreatePlanpacks < ActiveRecord::Migration[7.0]
  def change
    create_table :planpacks do |t|
      t.string :stripe_id
      t.string :name

      t.timestamps
    end
  end
end
