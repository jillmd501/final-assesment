class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :url
      t.integer :read

      t.timestamps null: false
    end
  end
end
