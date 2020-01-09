const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-wvqaa.mongodb.net/blog-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: 'Blog de futbol',
  author: 'Zidane',
  url: 'football.blogspot.com',
  likes: 10,
})

blog.save().then(() => {
  console.log('blog saved!')
  mongoose.connection.close()
})