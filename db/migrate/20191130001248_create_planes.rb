class CreatePlanes < ActiveRecord::Migration[6.0]
  def change
    create_table :planes do |t|
      t.string :model, null: false
      t.integer :row, null: false
      t.integer :seatsPerRow, null: false

      t.timestamps
    end
  end
end
