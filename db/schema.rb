# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_02_193736) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "contact_info"
    t.string "budget"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pay_charges", id: :serial, force: :cascade do |t|
    t.string "owner_type"
    t.integer "owner_id"
    t.string "processor", null: false
    t.string "processor_id", null: false
    t.integer "amount", null: false
    t.integer "amount_refunded"
    t.string "card_type"
    t.string "card_last4"
    t.string "card_exp_month"
    t.string "card_exp_year"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.jsonb "data"
    t.string "currency"
    t.integer "application_fee_amount"
    t.integer "pay_subscription_id"
    t.index ["processor", "processor_id"], name: "index_pay_charges_on_processor_and_processor_id", unique: true
  end

  create_table "pay_subscriptions", id: :serial, force: :cascade do |t|
    t.string "owner_type"
    t.integer "owner_id"
    t.string "name", null: false
    t.string "processor", null: false
    t.string "processor_id", null: false
    t.string "processor_plan", null: false
    t.integer "quantity", default: 1, null: false
    t.datetime "trial_ends_at", precision: nil
    t.datetime "ends_at", precision: nil
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.string "status"
    t.jsonb "data"
    t.decimal "application_fee_percent", precision: 8, scale: 2
    t.index ["processor", "processor_id"], name: "index_pay_subscriptions_on_processor_and_processor_id", unique: true
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "client_id", null: false
    t.bigint "slot_id", null: false
    t.bigint "station_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_reservations_on_client_id"
    t.index ["slot_id"], name: "index_reservations_on_slot_id"
    t.index ["station_id"], name: "index_reservations_on_station_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "slots", force: :cascade do |t|
    t.bigint "station_id", null: false
    t.integer "time"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["station_id"], name: "index_slots_on_station_id"
  end

  create_table "stations", force: :cascade do |t|
    t.string "name"
    t.string "contact_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.string "email"
    t.string "organization"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "reservations", "clients"
  add_foreign_key "reservations", "slots"
  add_foreign_key "reservations", "stations"
  add_foreign_key "reservations", "users"
  add_foreign_key "slots", "stations"
end
