require('dotenv').config()
const express = require('express')
const app = express()
const { MOCKS } = require('/home/justin/Dev/mock')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = process.env.PORT || 8080

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'Mock me!'})
})
app.use('/mock', router);


router.post('/services/data/v42.0/sobjects/Knowledge__kav', (req, res) => {
    console.info(req.body)
    res.json(MOCKS.BODYRESPONSE)

})

app.listen(port);
console.log('Magic happens on port ' + port);