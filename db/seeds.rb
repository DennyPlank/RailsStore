# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
Store.destroy_all

rei = Store.create(name: 'REI')
big5 = Store.create(name: 'Big 5 Sporting Goods')
sA = Store.create(name: 'Sports Authority')
sB = Store.create(name: 'Starbucks')

rei.products.create(name: 'Climbing Gear', body: "Used climbing rope")
rei.products.create(name: 'Ski Jacket', body: "XL, very warm")


big5.products.create(name: 'Shakeweight', body: "questionable workout device")
big5.products.create(name: 'Basketball Hoop', body: "Extends to 12ft")
