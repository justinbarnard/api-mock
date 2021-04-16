require('dotenv').config()
const express = require('express')
const app = express()
const { MOCKS } = require('./mock')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = process.env.PORT || 8080

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'Mock me!'})
})
app.use('/mock', router);


router.post('/services/oauth2/token', (req, res) => {
    console.info(req.body)
    res.json(MOCKS.BODYRESPONSE)

})

router.get('/services/data/v42.0/query/', (req,res) => {
    console.info(req.body)
    console.log(req.query.q)
    res.json(MOCKS.KNOWLEDGEIDS_BODY)
})

router.get('/services/data/v42.0/sobjects/Knowledge__kav/:id', (req, res) => {
    console.info(req.body)
    console.log(req.params.id)
    res.json(MOCKS.ARTICLE_RESPONSE)
})


//example test that mirrors params
router.get('/test/:username', (req,res)=> {
    console.info(req.body)
    const username = req.params.username
    res.json({
            'username': username
    })

})

//
router.get('/error', (req, res) => {
    res.status(500)
    res.send('I broke')
})

app.listen(port);
console.log('Magic happens on port ' + port)