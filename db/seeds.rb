# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Store.destroy_all

Store.create(name: 'REI')
Store.create(name: 'Big 5 Sporting Goods')
Store.create(name: 'Sports Authority')
Store.create(name: 'Starbucks')
