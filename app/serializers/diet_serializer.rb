class DietSerializer < ActiveModel::Serializer
  attributes :meal_1, :meal_2, :meal_3, :meal_4, :meal_5, :meal_6
  has_one :user
end
