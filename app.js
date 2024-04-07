const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set Handlebars as the view engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example middleware to parse incoming JSON payloads
app.use(express.json());

// Routes
app.get('/Home', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        isLoggedIn: req.session.isLoggedIn || false,
        searchValue: req.query.searchTerm || ''
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Registration Page'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
});

// More routes can be added as needed

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});