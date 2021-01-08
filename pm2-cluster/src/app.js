const express = require('express')
const app = express()

const doWork = ( duration ) => {
    const start = Date.now()
    while (Date.now() - start < duration) {}
}

app.get('/', function (req, res) {
    doWork(5000) // 5 seconds
    res.send('Hello World 1')
})
 

app.get('/fast', (req, res) => {
    res.send('fast')
})
app.listen(3000)