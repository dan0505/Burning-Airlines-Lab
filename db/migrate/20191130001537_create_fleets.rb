class CreateFleets < ActiveRecord::Migration[6.0]
  def change
    create_table :fleets do |t|
      t.references :plane, null: false
      t.string :color, null: false, default: 'white'

      t.timestamps
    end
  end
end
