const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.path)
    res.send('Hello World!');
})

app.listen(3300)