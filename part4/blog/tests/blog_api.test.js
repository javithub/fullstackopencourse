const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('Blog API test', () => {
    test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('there are two blogs', async () => {
        const response = await api.get('/api/blogs')
    
        expect(response.body.length).toBe(2)
    })
    
    test('the first blog is about football', async () => {
        const response = await api.get('/api/blogs')
    
        expect(response.body[0].title).toBe('Blog de futbol (test database)')
    })

    afterAll(() => {
    mongoose.connection.close()
    })
})