// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// set up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes
// =============================================================
app.use(express.static('public'));
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
// API routes
const apiRoutes = require('./routes/api');
app.use(apiRoutes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log('The application is running on localhost:3000!');
});

