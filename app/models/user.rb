class User < ApplicationRecord
  has_secure_password
  has_many :seat

  # enum admin: [:admin, :user]
end
