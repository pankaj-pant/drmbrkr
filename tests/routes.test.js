const supertest = require('supertest')
const app = require('../index')

  describe('Testing Endpoints which respond with status code 200', () => {
    //Testing the GET / endpoint
    it('should return Hi there... analyze your text!', async () => {
        const res = await supertest(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Hi there. Send a POST request to endpoint /analyze to analyze your text!")
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
      it('should return textLength withSpaces equal to 31', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: 'Testing the endpoint with jest.'})
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
        expect(res.body.textLength.withSpaces).toEqual(31)
    })

      //Testing the POST /analyze endpoint
      it('should return correct characterCount array', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: 's0Meth1nG! Sh0rTer?'})
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
        expect(res.body.characterCount).toEqual([ {"e": 2}, {"g": 1}, {"h": 2}, {"m": 1}, {"n": 1}, {"r": 2}, {"s": 2}, {"t": 2}])
    })

      //Testing the POST /analyze endpoint
      it('should return wordCount equal to 0', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: '   '})
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
        expect(res.body.wordCount).toEqual(0)
    })
  })

  describe('Testing Endpoints which respond with status code 400', () => {
      //Testing the GET /unknown endpoint
      it('should return error message', async () => {
        const res = await supertest(app).get('/unknown')
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("unknown endpoint")
    })

      //Testing the POST /unknown endpoint
      it('should return error message', async () => {
        const res = await supertest(app).post('/unknown')
        .send({text: "hello 2 times"})
        .set('Accept', 'application/json')
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("unknown endpoint")
    })

      //Testing the POST /analyze endpoint
      it('should return error message', async () => {
        const res = await supertest(app).post('/analyze')
        .send({text: 9})
        .set('Accept', 'application/json')
        expect(res.status).toBe(400)
        expect(res.body.error).toEqual('Text input is not valid. Please try again!')
    })

      //Testing the POST /analyze endpoint
      it('should return error message', async () => {
        const res = await supertest(app).post('/analyze')
        .send({sentence: "Does this work?"})
        .set('Accept', 'application/json')
        expect(res.status).toBe(400)
        expect(res.body.error).toEqual('Text input is not valid. Please try again!')
    })
  })
