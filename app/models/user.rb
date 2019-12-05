class User < ApplicationRecord
  has_secure_password

  # enum admin: [:admin, :user]
end
