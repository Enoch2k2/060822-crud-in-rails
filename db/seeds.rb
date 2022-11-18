# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Movie.create([
  {
    title: "Fellowship of the Ring",
    description: "A story about this wizard and small guy who found a ring that was bad.",
    genre: "Fantasy",
    release_date: "A long time ago"
  },
  {
    title: "Star Wars: A new hope",
    description: "This is a true story that happened a long time ago",
    genre: "Documentary",
    release_date: "A long time ago in a galaxy far away"
  },
  {
    title: "The Matrix",
    description: "A guy who gets stuck in a computer, but also might be in a computer stuck inside of another computer",
    genre: "Sci-Fi",
    release_date: "Not tooooooooo long ago"
  },
  {
    title: "John Wick",
    description: "Never hurt anyone's dog, or else John Wick will get mad",
    genre: "Action",
    release_date: "Not too too long ago"
  }
])