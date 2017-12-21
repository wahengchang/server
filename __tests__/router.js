const router = require('../routers/users')
const httpMocks = require('node-mocks-http')

describe('GET /users', () => {
    it('should return the initial state', (done) => {
      const req = httpMocks.createRequest({method: 'GET',url: '/'})
      const res = httpMocks.createResponse()
      res.json = function (_res) {  
        expect(_res.username).toBe('peterchang')
        expect(_res.id).toBe('fakeid')
        done()
      }
      router.handle(req, res)
    })
  })
  