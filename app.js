const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('My Books')
})

app.get('/mybooks', (req, res) => {
    res.send('List books')
})

app.post('/mybooks', (req, res) => {
    res.send('Add books')
})

app.put('/mybooks', (req, res) => {
    res.send('Update books')
})

app.delete('/mybooks', (req, res) => {
    res.send('Delete books')
})

app.listen(port, () => {
    console.log(`Hello`)
})