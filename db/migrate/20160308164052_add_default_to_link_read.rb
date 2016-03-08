class AddDefaultToLinkRead < ActiveRecord::Migration
  def change
    change_column :links, :read, :integer, default: 0
  end
end
