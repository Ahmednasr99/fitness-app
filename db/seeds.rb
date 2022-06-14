# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


#users
u1 = User.create(name: 'Louis', email: 'louis@gmail.com', admin: true, password: "password")
u2 = User.create(name: 'Grace', email: 'grace@gmail.com', admin: true, password: "password")
u3 = User.create(name: "ahmed", email: 'ahmed@gmail.com', admin: true, password: "ahmed")
u4 = User.create(name: "me", email: 'me@gmail.com', admin: true, password: "password")
#diets
d1 = Diet.create(meal_1: '150 g otsmeal , 5 eggs ',
      meal_2: '150 g rice , 150 g chicken,40 g vegtables',
      meal_3: '150 g rice , 150 g steak,40 g vegtables',
      meal_4: '150 g potats , 150 g chicken,40 g vegtables',
      meal_5:'150 g potats , 150 g chicken,40 g vegtables',
      meal_6: '150 g potats , 150 g chicken,40 g vegtables',
      user_id: u1.id)

d2 = Diet.create(meal_1: "150 g otsmeal , 5 eggs ",
     meal_2: "150 g rice , 150 g chicken,40 g vegtables",
     meal_3: "150 g rice , 150 g steak,40 g vegtables",
     meal_4: "150 g potats , 150 g chicken,40 g vegtables",
     meal_5: "150 g rice , 150 g salmon,40 g vegtables",
     meal_6: "150 g rice , 150 g chicken,40 g vegtables",
     user_id:u2.id)

d3 = Diet.create(meal_1: "150 g otsmeal , 5 eggs ",
     meal_2: "150 g rice , 150 g chicken,40 g vegtables",
     meal_3: "150 g rice , 150 g steak,40 g vegtables",
     meal_4: "150 g potats , 150 g chicken,40 g vegtables",
     meal_5: "150 g rice , 150 g salmon,40 g vegtables",
     meal_6: "150 g rice , 150 g chicken,40 g vegtables",
     user_id:u3.id)

w1=Workout.create(monday: "chest",
tuesday: "back",
wednesday: "legs",
thursday: "Arms",
friday: "chest",
saturday: "shoulders",
sunday: "rest",
user_id:u1.id)
    
w2=Workout.create(monday: "chest and biceps",
      tuesday: "back and triceps",
      wednesday: "legs and shoulders",
      thursday: "rest",friday: "chest and biceps",
      saturday: "back and triceps",
      sunday: "legs and shoulders",
      user_id:u2.id)
    

w3=Workout.create(monday: "chest and biceps",
tuesday: "back and triceps",
wednesday: "legs and shoulders",
thursday: "rest",
friday: "chest and biceps",
saturday: "back and triceps",
sunday: "legs and shoulders",
user_id:u3.id)


c1 = Champion.create(name:"Arnold Schwarzenegger",
image_url:"https://media.newyorker.com/photos/624f484bb8900d61c847f8d7/master/pass/Long-Butler-09.jpg",
birthDate:"July 30, 1947",
weight:235,
category:"open weight",
nationality:"American Austrian",
height:188)

c2 = Champion.create(name:"Ronnie Coleman",
      image_url:"https://preview.redd.it/vn0zzxddtez41.jpg?auto=webp&s=04dd1f676aea9da5237da299902543fa9b9a7132",
      birthDate:"May 13, 1964",
      weight:297,
      category:"open weight",
      nationality:"American",
      height:180)
    
c3 = Champion.create(name:"Big Ramy",
            image_url:"https://pbs.twimg.com/media/EpqGn6rVQAAc3-6.jpg",
            birthDate:"September 16, 1984",
            weight:295,
            category:"open weight",
            nationality:"Egyptien",
            height:175) 
 
puts "seeds done "