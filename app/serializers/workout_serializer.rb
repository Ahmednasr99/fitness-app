class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday
  has_one :user
end
