
const cluster = require('cluster')

// If the file being executed in master mode?
if( cluster.isMaster ) {
    // Cause app.js to be executed in *again* but in child mode.
    // You can have split the request to many child.
    // Thumd of rule 1, number of child + number of thread = number logical of processor
    // Or  number of child = number logical of processor
    cluster.fork();
    cluster.fork();
} else {
    const express = require('express')
    const app = express()
    
    const doWork = ( duration ) => {
        const start = Date.now()
        while (Date.now() - start < duration) {}
    }
    
    app.get('/', function (req, res) {
        doWork(5000) // 5 seconds
        res.send('Hello World')
    })
 

    app.get('/fast', (req, res) => {
        res.send('fast')
    })

    app.listen(3000)
}

