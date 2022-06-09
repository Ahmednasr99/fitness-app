class UserSerializer < ActiveModel::Serializer
  attributes  :name, :email, :admin
end
