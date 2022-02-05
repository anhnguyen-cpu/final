const express = require('express')
const mustache = require('mustache-express')

const app = express()

// Setup views
app.engine('html', mustache())
app.set('view engine', 'html')

// Setup static
app.use(express.static('static'))

// Setup post
app.use(express.urlencoded({ extended: false }))



// Routes
app.get('/', (req, res) => res.render('home'))
app.get('/chatrooms', require('./controllers/chatrooms') )
app.use('/messages', require('./controllers/messages') )



// Serve the app
const port = 8080
app.listen(port, () => console.log(`Served at http://localhost:${port}`))
