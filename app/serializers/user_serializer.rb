class UserSerializer < ActiveModel::Serializer
  attributes  :id, :name, :email, :admin

  
  has_many :diets
  has_many :workouts
end
