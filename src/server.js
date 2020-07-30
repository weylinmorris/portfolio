const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath, { extensions: ['html'] }))

app.listen(3000, () => {
    console.log('App running on port 3000')
})