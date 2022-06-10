class WorkoutSerializer < ActiveModel::Serializer
  attributes :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday
  has_one :user
end
