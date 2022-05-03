# This migration comes from pay (originally 20210714175351)
class AddUniquenessToPayModels < ActiveRecord::Migration[6.1]
  def change
    add_index :pay_charges, [:processor, :processor_id], unique: true
    add_index :pay_subscriptions, [:processor, :processor_id], unique: true
  end
end
