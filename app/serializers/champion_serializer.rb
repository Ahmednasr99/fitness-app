class ChampionSerializer < ActiveModel::Serializer
  attributes  :name, :image_url, :birthDate, :weight, :height, :category, :nationality
end
