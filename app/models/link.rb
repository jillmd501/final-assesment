class Link < ActiveRecord::Base
  enum read: [:unread, :read]
end
