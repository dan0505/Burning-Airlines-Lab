class CreateFlights < ActiveRecord::Migration[6.0]
  def change
    create_table :flights do |t|
      t.references :departure, null: false
      t.references :arrival, null: false
      t.datetime :date, null: false
      t.references :fleet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
