// Reference
// https://github.com/globalbanana/website/blob/dev/src/router/login.js

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {  
    const fakeUser = {
        id: 'fakeid',
        username: 'peterchang'
    }
    res.json(fakeUser)
})

module.exports = router
