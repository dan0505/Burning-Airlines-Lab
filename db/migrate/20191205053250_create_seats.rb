class CreateSeats < ActiveRecord::Migration[6.0]
  def change
    create_table :seats do |t|
      t.references :user, null: false, foreign_key: true
      t.references :flight, null: false, foreign_key: true
      t.integer :seat_row, null: false
      t.string :seat_col, null: false
      t.string :public_uid
      t.index :public_uid

      t.timestamps
    end
  end
end
