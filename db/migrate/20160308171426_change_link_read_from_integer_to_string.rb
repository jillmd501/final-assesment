class ChangeLinkReadFromIntegerToString < ActiveRecord::Migration
  def change
    change_column :links, :read, :string, default: "unread"
  end
end
