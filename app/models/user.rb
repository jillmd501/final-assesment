class User < ActiveRecord::Base
  validates :username, uniqueness: true
  validates_confirmation_of :password

  has_many :links
  
  has_secure_password
end
