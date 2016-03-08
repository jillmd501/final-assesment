class Link < ActiveRecord::Base
  validates :title, :url, presence: true

  enum read: [:unread, :read]
end
