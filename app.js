var express = require('express')
const port = process.env.PORT || 3000

var app = express()

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// Goal mbr sysem
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

// GET  /api/v1/users/login
// GET  /api/v1/users/logout
// GET  /api/v1/users/signup

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// Ronald Todo
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
//  Knowledge
//      Unit test
//      Promise
//  Implement
//      monogoDB - user
//
// app.use('/api/v1/users', require('./router/users'))


/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// Sam Todo
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
//  Knowledge
//      MongoLab
//      bike (CURD: Create, Update, Read, Delete)

app.use('/users', require('./routers/users'))

app.get('/', function (req, res) {
    res.send('hello')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})