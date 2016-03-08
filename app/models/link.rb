class Link < ActiveRecord::Base
  belongs_to :users
  validates :title, :url, presence: true
  validates :read, inclusion: { in: %w(unread read) }
end
