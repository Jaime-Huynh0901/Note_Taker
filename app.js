// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();

// set up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes
// =============================================================
app.use(express.static('public'));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")));

// API routes
const apiRoutes = require('./routes/api');
app.use(apiRoutes);


// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

