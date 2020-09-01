const supertest = require('supertest')
const app = require('../index')

  describe('Testing Endpoints', () => {
    //Testing the GET / endpoint
    it('should return Hello World', async () => {
        const res = await supertest(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Hello World!")
    })

    //Testing the POST /analyze endpoint
    it('should return wordCount equal to 5', async () => {
      const res = await supertest(app).post('/analyze')
      .send({text: 'Testing the endpoint with jest.'})
      .set('Accept', 'application/json')
      expect(res.status).toBe(200)
      expect(res.body.wordCount).toEqual(5)
  })

      //Testing the POST /analyze endpoint
      it('should return textLength withSpaces equal to 5', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: 'Testing the endpoint with jest.'})
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
        expect(res.body.textLength.withSpaces).toEqual(31)
    })

      //Testing the POST /analyze endpoint
      it('should return textLength withSpaces equal to 5', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: 's0Meth1nG! Sh0rTer?'})
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
        expect(res.body.characterCount).toEqual([ {"e": 2}, {"g": 1}, {"h": 2}, {"m": 1}, {"n": 1}, {"r": 2}, {"s": 2}, {"t": 2}])
    })

      //Testing the POST /analyze endpoint
      it('should return textLength withSpaces equal to 5', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: '   '})
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
        expect(res.body.wordCount).toEqual(0)
    })

  })
