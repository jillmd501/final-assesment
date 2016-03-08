class Link < ActiveRecord::Base
  validates :title, :url, presence: true
  validates :read, inclusion: { in: %w(unread read) }
end
