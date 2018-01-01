const router = require('../routers/users')
const httpMocks = require('node-mocks-http')

describe('GET /users', () => {
    it('should return the initial state', (done) => {
      const req = httpMocks.createRequest({method: 'GET',url: '/id'})
      const res = httpMocks.createResponse()
      res.send = function (_res) {  
        // expect(_res.username).toBe('peterchang')
        // expect(_res.id).toBe('fakeid')
        done()
      }
      router.handle(req, res)
    })
  })
  