# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



u1 = User.create(name: 'Louis', email: 'louis@gmail.com', admin: true, password: "password")
u2 = User.create(name: 'Grace', email: 'grace@gmail.com', admin: true, password: "password")
u3 = User.create(name: 'Ahmed', email: 'ahmed@gmail.com', admin: true, password: "password")

puts "seeds done "