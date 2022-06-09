class UserSerializer < ActiveModel::Serializer
  attributes  :name, :email, :admin

  
  has_many :diets
  has_many :workouts
end
