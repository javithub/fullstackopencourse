const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
      title: 'Blog de futbol (test)',
      author: 'Zidane',
      url: 'football.blogspot.com',
      likes: 10,
    },
    {
        title: 'Blog de baloncesto (test)',
        author: 'Chicho Sibilio',
        url: 'basketball.blogspot.com',
        likes: 7,
    },
  ]

  beforeEach(async () => {
    await Blog.deleteMany({})
  
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
  
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
  })

describe('Blog API test', () => {
    test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('all blogs are returned', async () => {
        const response = await api.get('/api/blogs')
    
        expect(response.body.length).toBe(initialBlogs.length)
    })
    
    test('a specific blog is within the returned blogs', async () => {
        const response = await api.get('/api/blogs')
    
        const titles = response.body.map(r => r.title)
        expect(titles).toContain(
            'Blog de futbol (test)'
          )
    })

    afterAll(() => {
    mongoose.connection.close()
    })
})