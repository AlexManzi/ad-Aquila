class AddDatestoReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :dates, :string
  end
end
